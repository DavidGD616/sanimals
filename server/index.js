require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/products', async (req, res) => {
    try {
      const response = await axios.get(`${process.env.PRINTIFY_API_URL}shops/16369687/products.json`, {
        headers: {
          'Authorization': `Bearer ${process.env.PRINTIFY_API_TOKEN}`
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Route to fetch a specific product by product ID
app.get('/products/:id', async (req, res) => {
  const product_id = req.params.id;
  try {
      const response = await axios.get(`${process.env.PRINTIFY_API_URL}shops/16369687/products/${product_id}.json`, {
          headers: {
              'Authorization': `Bearer ${process.env.PRINTIFY_API_TOKEN}`
          }
      });

    // Filter the variants to include only those where is_enabled is true
    const productData = response.data;
    const enabledVariants = productData.variants.filter(variant => variant.is_enabled);

    // Update the product data with only enabled variants
    const filteredProductData = { ...productData, variants: enabledVariants };

    res.json(filteredProductData);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Route to fetch products from printify
app.listen(PORT, () => {
    console.log(`Express app listening at http://localhost:${PORT}`)
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
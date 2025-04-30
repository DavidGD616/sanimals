# Sanimals - E-Commerce Pet Store

![Sanimals Banner](https://via.placeholder.com/1200x300?text=Sanimals+E-Commerce+Pet+Store)

## 🐾 Overview

Sanimals is a full-stack e-commerce platform for pet products, featuring a React frontend and Node.js backend. The application integrates with Printify for product management and Stripe for secure payment processing, providing a seamless shopping experience for pet lovers.

## ✨ Features

- **Product Catalog**: Browse a variety of pet products with detailed descriptions
- **Shopping Cart**: Add, update, and remove items with real-time cart updates
- **User Authentication**: Secure account creation and login
- **Payment Processing**: Integrated Stripe checkout for secure payments
- **Order Management**: Track and manage customer orders
- **Responsive Design**: Optimized for desktop and mobile devices
- **Product Filtering**: Find products quickly with intuitive filtering
- **Printify Integration**: Real-time product data from Printify API

## 🛠️ Tech Stack

### Frontend
- **React**: JavaScript library for building the user interface
- **React Router**: Navigation and routing between pages
- **NextUI**: Modern UI component library
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for interactive UI elements
- **Stripe JS**: Client-side integration with Stripe payments
- **Axios**: HTTP client for API requests
- **SASS**: CSS preprocessor for custom styling

### Backend
- **Node.js**: JavaScript runtime for the server
- **Express**: Web framework for handling HTTP requests
- **MongoDB**: NoSQL database for storing application data
- **Mongoose**: MongoDB object modeling for Node.js
- **JWT**: JSON Web Tokens for user authentication
- **Stripe API**: Payment processing integration
- **Printify API**: Product management integration
- **Axios**: HTTP client for external API communication

## 📋 Project Structure

```
/
├── client/                  # Frontend React application
│   ├── public/              # Static assets
│   └── src/
│       ├── api/             # API client configuration
│       ├── components/      # Reusable UI components
│       ├── containers/      # Higher-level components
│       ├── context/         # React context providers
│       ├── pages/           # Page components
│       ├── styles/          # Global styles and SCSS
│       └── svg/             # SVG assets and icons
│
└── server/                  # Backend Node.js application
    ├── controllers/         # Request handlers
    ├── middleware/          # Express middleware
    ├── models/              # Mongoose data models
    ├── routes/              # API route definitions
    ├── services/            # Business logic
    └── index.js             # Server entry point
```

## 🏁 Getting Started

### Prerequisites

- Node.js 16.x or higher
- MongoDB installation or MongoDB Atlas account
- Printify API credentials
- Stripe API keys

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DavidGD616/sanimals.git
   cd sanimals
   ```

2. **Set up the server**
   ```bash
   cd server
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the server directory with:
   ```
   PORT=8888
   MONGODB_URI=your_mongodb_connection_string
   PRINTIFY_API_URL=https://api.printify.com/v1/
   PRINTIFY_API_TOKEN=your_printify_api_token
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLIENT_URL=http://localhost:3000
   ```

4. **Set up the client**
   ```bash
   cd ../client
   npm install
   ```

5. **Start the development environment**
   In the server directory:
   ```bash
   npm run server
   ```
   In the client directory:
   ```bash
   npm start
   ```

6. **Access the application**
   Open your browser and visit `http://localhost:3000`

## 🚀 Deployment

### Server Deployment
The server is configured for deployment on Vercel with the included `vercel.json` configuration file.

### Client Deployment
The React client can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 🧪 Testing

The project includes test setups for both client and server components:

```bash
# Client tests
cd client
npm test

# Server tests (when implemented)
cd server
npm test
```

## 📝 API Documentation

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get specific product details

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order details

### Checkout
- `POST /api/stripe/create-checkout-session` - Create a Stripe checkout session

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

David Guerrero - [@DavidGD616](https://github.com/DavidGD616)

Project Link: [https://github.com/DavidGD616/sanimals](https://github.com/DavidGD616/sanimals)

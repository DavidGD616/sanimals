import React, { useState } from "react";
import {Tabs, Tab} from "@nextui-org/react";
import { ColorsPicker } from "../components/ProductPage/ColorsPicker";
import { SizesPicker } from "../components/ProductPage/SizesPicker";
import { CartModal } from "../pages/CartModal";

function ProductSection({ product }) {

// Colors 
const colorOption = product.options.find(option => option.name === 'Colors');
  const colors = colorOption ? colorOption.values.map(value => ({
    id: value.id,
    title: value.title,
    colorCode: value.colors[0]
})) : [];

// Sizes
const sizeOption = product.options.find(option => option.name === 'Sizes');
const sizes = sizeOption ? sizeOption.values.map(value => ({
  id: value.id,
  size: value.title
})) : [];

// Images
const images = product.images || [];
// Filter images to show only the frontal shirt
const filteredImages = images.filter(position => position.position === "front")

// Create a map of color codes by ID
const colorMap = new Map(colors.map(color => [color.id, { colorCode: color.colorCode, title: color.title }]));

 // Extract color option IDs
 const colorOptionIds = colors.map(color => color.id);


// Group variants by color ID and include color code and title
const variantsByColorId = product.variants.reduce((acc, variant) => {
  variant.options.forEach(optionId => {
    if (colorOptionIds.includes(optionId)) {
      if (!acc[optionId]) {
        acc[optionId] = {
          id: optionId,
          ...colorMap.get(optionId),
          variants: []
        };
      }
      acc[optionId].variants.push(variant);
    }
  });
  return acc;
}, {});

// Convert Set to Array and prepare colors data for ColorsPicker
const colorsForPicker = Object.values(variantsByColorId).map(colorData => ({
  id: colorData.id,
  title: colorData.title,
  colorCode: colorData.colorCode,
  variants: colorData.variants
}));

 // Combine colors, sizes, and variants into a single data structure
  const combinedData = colorsForPicker.map(color => {
    return {
      ...color,
      sizes: sizes.map(size => {
        const matchingVariants = color.variants.filter(variant =>
          variant.options.includes(size.id),
        );
        return {
          size,
          variants: matchingVariants
        };
      }),
      images: filteredImages.map(image => {
        const matchingVariants = color.variants.filter(variant =>
          image.variant_ids.includes(variant.id)
        );
        return {
          src: image.src,
          variants: matchingVariants
        }
      }).filter(imageData => imageData.variants.length > 0)
    };
  });
  // console.log('combinedData:', combinedData)

  // MAIN IMAGE
  const mImage = combinedData[0].images[0]?.src || ''
  const [mainImage, setMainImage] = useState(mImage);

  const handleThumbnailClick = (image) => {
    setMainImage(image)
  }

// Main Color
const [mainColor, setMainColor] = useState(combinedData[0]);
const [mainSize, setMainSize] = useState(mainColor.sizes[0])

 const handleChangeColor = (color) => {
  // console.log('Selected color:', color);
  setMainColor(color);
  setMainImage(color.images[0].src)
  // Set the default size when a new color is selected
  if (color.sizes.length > 0) {
    setMainSize(color.sizes[0]);
  }
}

const handleChangeSize = (size) => {
  // console.log('Selected size:', size);
  setMainSize(size);
};

// Price
const price = (mainSize.variants[0].price / 100).toFixed(2);

const newCartItem = {
  id: product.id,
  variant_ids: mainSize.variants[0].id,
  variants: mainSize.variants[0],
  title: product.title,
  color: mainColor.title,
  size: mainSize.size.size,
  price: mainSize.variants[0].price,
  image: mainImage
};
// console.log("cart", newCartItem)


    return (
      <section className="py-12 sm:py-16">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    src={mainImage}
                    alt={product.title}
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  {filteredImages.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent focus:border-gray-900 text-center"
                    >
                      <img
                        className="h-full w-full object-contain"
                        src={image.src}
                        alt={product.title}
                        onClick={() => handleThumbnailClick(image.src)}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl mb-8">
              {product.title}
            </h1>

            {/* Color Picker */}
            <label className="mt-8 text-base text-gray-900">
              Color: {mainColor.title}
            </label>
            <ColorsPicker
              colors={combinedData}
              mainColor={mainColor}
              onChangeColor={handleChangeColor}
            />

            {/* Sizes Picker */}
            <label className="mt-8 text-base text-gray-900">
              Size: {mainSize.size.size}
            </label>
            <SizesPicker
              sizes={mainColor.sizes}
              mainSize={mainSize}
              onChangeSize={handleChangeSize}
            />

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <span className="text-3xl font-bold text-black">${price}</span>
              </div>
              {/* Add to Cart Button */}
              <CartModal product={newCartItem} />
            </div>

            {/* <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <Link to='#' className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">Description</Link>
                </nav>
              </div>
            </div>

            <div className="mt-8 flow-root sm:mt-12">
              <p className="mt-4">{product.description}</p>
            </div> */}

            <Tabs 
            aria-label="Options"
            variant="underlined"
            size="lg"
            fullWidth
            classNames={{
              tabList: "w-full flex justify-between",
              cursor: "w-full bg-gray-300",
              tab: "max-w-fit px-0 h-12",
            }}
            >
              <Tab key="description" title="Description">
                <p className="mt-4">{product.description}</p>
              </Tab>
              <Tab key="size" title="Size">

              <div className="mx-auto">
      <table id="size-guide" className="w-full text-[9px] min-[340px]:text-[10px] sm:text-[.8rem]">
        <thead>
          <tr>
            <th className="p-1"></th>
            {['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'].map((size) => (
              <th key={size} className="text-left text-black font-medium p-1">{size}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { label: 'Width, in', values: [18.00, 20.00, 22.00, 24.00, 26.00, 28.00, 30.00, 32.00] },
            { label: 'Length, in', values: [28.00, 29.00, 30.00, 31.00, 32.00, 33.00, 34.00, 35.00] },
            { label: 'Sleeve length (from center back), in', values: [15.10, 16.50, 18.00, 19.50, 21.00, 22.40, 23.70, 25.00] },
            { label: 'Size tolerance, in', values: [1.50, 1.50, 1.50, 1.50, 1.50, 1.50, 1.50, 1.50] },
          ].map((row, idx) => (
            <tr key={idx}>
              <td className="p-1 text-gray-600 border-t border-gray-200 break-words">{row.label}</td>
              {row.values.map((value, index) => (
                <td key={index} className="p-1 text-gray-600 border-t border-gray-200 break-words">{value.toFixed(2)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
              </Tab>
              <Tab key="shipping" title="Shipping">
                Shipping - 3-6 working days (approximately)
              </Tab>
            </Tabs>

          </div>
        </div>
      </section>
    );
}

export { ProductSection };
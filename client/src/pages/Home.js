import React, { useEffect, useState } from 'react';
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ArrowUp } from '../svg/ArrowUp';
import { fetchProducts } from '../api/printifyAPI';
import { Banner } from '../containers/Banner';
import { SkeletonProduct } from '../components/Skeletons';
import { ProductCard } from '../components/ProductCard';
import { PageWidth } from '../components/PageWidth';

function Home() {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const productsData = await fetchProducts();
                // console.log('Fetched products Home: ', productsData.data);
                setProducts(productsData.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        fetchData();
    }, [])

    const skeletonArray = new Array(5).fill(<SkeletonProduct />);

    return (
      <>
        <Banner />
        <PageWidth>
          <section className="pt-16">
            <h2 className="my-4 text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
              Get Yours
            </h2>
            {products && products.length > 0 ? (
                <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3 place-items-center">
                  {/* Show just 5 products in total. */}
                  {products.slice(0, 5).map((product, index) => (
                    <ProductCard key={index} products={product} />
                  ))}
                  <div className="flex justify-center items-center my-12">
                    <Button
                      as={Link}
                      to={`/products`}
                      variant="bordered"
                      radius="full"
                      className="
                            px-6
                            md:px-8
                            py-6
                            md:py-8
                            font-medium
                            border-[3px]
                            border-[#461E5C]
                            text-[#461E5C]
                            text-base
                            lg:text-xl
                            leading-9
                            tracking-wide
                            "
                    >
                      ALL PRODUCTS
                      <ArrowUp />
                    </Button>
                  </div>
                </div>
            ) : (
              <>
                <div className="my-8 mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 place-items-center">
                  {skeletonArray.map((skeleton, index) => (
                    <React.Fragment key={index}>{skeleton}</React.Fragment>
                  ))}
                </div>
              </>
            )}
          </section>
        </PageWidth>
      </>
    );
}

export { Home };

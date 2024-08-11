import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../api/fakeStoreAPI";
import { useParams } from "react-router-dom";
import { PageWidth } from "../components/PageWidth";
import { ProductsSection } from "../containers/ProductsSection";
import { SkeletonProduct } from "../components/Skeletons";

function ProductsByCategory() {
    const { categoryId } = useParams();
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const productsData = await fetchProductsByCategory(categoryId);
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, [categoryId]);

    const skeletonArray = new Array(8).fill(<SkeletonProduct />);

    return (
        <>
            <PageWidth>
                {products && products.length > 0 ? (
                    <>
                    <h1 className="text-4xl font-bold text-center my-12">{products[0].category.name}</h1>
                    <ProductsSection products={products} />
                    </>
                ) : (
                    <>
                    <div className='mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4'>
                        {skeletonArray.map((skeleton, index) => (
                            <React.Fragment key={index}>
                                {skeleton}
                            </React.Fragment>
                        ))}
                    </div>
                    </>
                )}
            </PageWidth>
        </>
    )
}

export { ProductsByCategory };
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/printifyAPI';
import { PageWidth } from '../components/PageWidth';
import { ProductSection } from '../containers/ProductSection';
import { ProductPageSkeleton } from '../components/Skeletons';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const productData = await fetchProductById(id);
                setProduct(productData);
                // console.log(productData)
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, [id]);

    if (!product) {
        return (
            <>
            <PageWidth>
                <ProductPageSkeleton />
            </PageWidth>
            </>
        )
    }

    return (
        <>
        <PageWidth>
            <ProductSection product={product} />
        </PageWidth>
        </>
    )
}

export { ProductPage };
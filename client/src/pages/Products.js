import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/printifyAPI';
import { PageWidth } from '../components/PageWidth';
import { ProductsSection } from '../containers/ProductsSection';
// import { Pagination } from '@nextui-org/react';
import { SkeletonProduct } from '../components/Skeletons';

function Products() {
    // const productsPerPage = 8;
    const [ products, setProducts ] = useState([]);
    // const [ currentPage, setCurrentPage ] = useState(1);
    // const [ totalPages, setTotalPages ] = useState(1);

    // const indexOfLastProduct = currentPage * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    useEffect(() => {
        async function fetchData() {
            try {
                const productsData = await fetchProducts();
                // console.log('Fetched products: ', productsData.data);
                setProducts(productsData.data);
                // Calculate total pages based on the length of productsData
                // const totalPages = Math.ceil(productsData.length / productsPerPage);
                // setTotalPages(totalPages);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        fetchData();
    }, []);


    const skeletonArray = new Array(8).fill(<SkeletonProduct />);



    return (
        <>
            <PageWidth>
                <h1 className="text-4xl font-bold text-center my-12">All Products</h1>
                {products && products.length > 0 ? (
                    <>
                    <ProductsSection products={products} />
                    <div className='flex w-full justify-center mb-10'>
                        {/* <Pagination
                            variant='flat'
                            color='primary'
                            size='lg'
                            radius='md'
                            total={totalPages}
                            siblings={0}
                            boundaries={2}
                            initialPage={1}
                            showControls
                            page={currentPage}
                            onChange={(currentPage) => setCurrentPage(currentPage)}
                        /> */}

                    </div>
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
      );
}

export { Products }
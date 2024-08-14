import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ products }) {
    
    return (
        <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <Link to={`/products/${products.id}`}>
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">     
                        <img className="peer absolute top-0 right-0 h-full w-full object-cover"
                        src={products.images[0].src} alt={products.title} />
                        <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                        src={products.images[7].src} alt={products.images} />
                        <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
                    
                </div>
                <div className="mt-4 px-5 pb-5">
                    <Link to={`/products/${products.id}`}>
                        <h5 className="sm:text-sm md:text-xl text-xl tracking-tight text-slate-900">{products.title}</h5>
                    </Link>
                    <div className="mt-2 flex sm:flex-col md:flex-row flex-col items-center justify-between ">
                        <p>
                            <span className="text-[20px]   font-bold text-slate-900">${(products.variants[0].price / 100).toFixed(2)}</span>
                        </p>
                    </div>
                </div>
                </Link>
        </div>
    );
}

export { ProductCard }
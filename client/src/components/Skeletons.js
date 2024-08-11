import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

function SkeletonProduct() {
  return (
    <Card
      className="my-10 w-full max-w-xs space-y-5 p-4 border border-gray-100 bg-white shadow-md"
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <div className="h-60 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

function ProductPageSkeleton() {
  return (
    <section className="py-12 sm:py-16">
    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      
      {/* Image and Thumbnails */}
      <div className="lg:col-span-3 lg:row-end-1">
        <div className="lg:flex lg:items-start">
          <div className="lg:order-2 lg:ml-5">
            <Skeleton className="overflow-hidden rounded-lg">
            <div className="bg-default-300 aspect-square min-w-[304px] min-h-[304px] max-w-[576px] max-h-[576px] w-[304px] h-[304px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[576px] lg:h-[576px]"></div>
            </Skeleton>
          </div>
          <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row items-start lg:flex-col">
              {[...Array(4)].map((_, index) => (
                <Skeleton key={index} className="flex-0 aspect-square mb-3 h-20 rounded-lg">
                  <div className="h-full bg-default-300"></div>
                </Skeleton>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <Skeleton className="mb-8">
          <div className="h-10 bg-default-200 w-3/4"></div>
        </Skeleton>
        
        {/* Color Picker */}
        <Skeleton className="mt-8">
          <div className="h-6 bg-default-200 w-1/3 mb-2"></div>
          <div className="h-10 bg-default-300 w-full"></div>
        </Skeleton>
        
        {/* Sizes Picker */}
        <Skeleton className="mt-8">
          <div className="h-6 bg-default-200 w-1/3 mb-2"></div>
          <div className="h-10 bg-default-300 w-full"></div>
        </Skeleton>

        <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <Skeleton className="w-1/3">
            <div className="h-10 bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-1/2">
            <div className="h-12 bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </div>
  </section>
  )
}

export { SkeletonProduct, ProductPageSkeleton };

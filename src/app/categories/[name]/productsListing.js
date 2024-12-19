'use client'

import Link from 'next/link';


export default function ProductsListing({ products }) {

  return (
    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
      {products.map((product, id) => (
        <div
          key={id}
          className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
            <img
              alt={product.imageAlt}
              src={product.image_srcs[0]}
              className="h-full w-full object-cover object-center sm:h-full sm:w-full"
            />
          </div>
          <div className="flex flex-1 flex-col space-y-2 p-4">
            <h3 className="text-sm font-medium text-gray-900 max-w-64 truncate">
              <Link href={{ pathname: `/products/${product.id}`, }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </Link>
            </h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <div className="flex flex-1 flex-col justify-end">
              <p className="text-sm italic text-gray-500">{product.sizes.join("-")}</p>
              <p className="text-base font-medium text-gray-900">150 MAD</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

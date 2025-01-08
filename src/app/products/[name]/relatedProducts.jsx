import Link from "next/link"

export default function RelatedProducts({products}) {

  return (
    <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        Customers also bought
      </h2>

      <div className="max-h-96 overflow-y-scroll mt-8 inline-grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}?category=${product.category}`} className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  alt={product.imageAlt}
                  src={product.image_srcs[0]}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-lg font-semibold text-white">150  MAD</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

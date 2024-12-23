'use client'

import { getProductsFromCart } from "@/app/cart/cart"
import { useEffect, useState } from "react"

const taxes = 23

export default function OrderSummary() {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let p = 0;
    let products = getProductsFromCart();
    products.map((product, productIdx) => {
      p += product.value.price;
    });
    setTotal(p + taxes);
    setProducts(products);
  }, []);

  return (
    <section aria-labelledby="summary-heading" className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex">
      <h2 id="summary-heading" className="sr-only">
        Order summary
      </h2>

      <ul role="list" className="max-h-[274px] overflow-y-auto divide-y divide-gray-200 px-6">
        {products.map((product) => (
          <li key={product.value.id} className="flex space-x-6 py-6">
            <img
              alt={product.imageAlt}
              src={product.value.image}
              className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
            />
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-1 text-sm font-medium">
                <h3 className="text-gray-900">{product.value.title}</h3>
                <p className="text-gray-900">{product.value.price}</p>
                {/* <p className="text-gray-500">{product.color}</p> */}
                <p className="text-gray-500">{product.value.size}</p>
              </div>
              <div className="flex space-x-4">
                <button type="button" className="text-sm font-medium text-black hover:text-black">
                  Edit
                </button>
                <div className="flex border-l border-gray-300 pl-4">
                  <button type="button" className="text-sm font-medium text-black hover:text-black">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
        <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
          <div className="flex justify-between">
            <dt>Taxes</dt>
            <dd className="text-gray-900">{taxes} MAD</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
            <dt className="text-base">Total</dt>
            <dd className="text-base">{total} MAD</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

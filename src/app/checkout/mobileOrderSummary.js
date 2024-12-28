'use client'

import { useEffect, useState } from 'react'
import { getProductsFromCart } from '@/app/cart/cart';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'


const taxes = 23


export default function MobileOrderSummary() {

  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  
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
    <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
      <Disclosure as="div" className="mx-auto max-w-lg">
        <div className="flex items-center justify-between">
          <h2 id="order-heading" className="text-lg font-medium text-gray-900">
            Your Order
          </h2>
          <DisclosureButton className="group font-medium text-black hover:text-black">
            <span className="[.group:not([data-open])_&]:hidden">Hide full summary</span>
            <span className="group-data-[open]:hidden">Show full summary</span>
          </DisclosureButton>
        </div>

        <DisclosurePanel>
          <ul role="list" className="max-h-[274px] overflow-y-auto divide-y divide-gray-200 border-b border-gray-200">
            {products.map((product, id) => (
              <li key={id} className="flex space-x-6 py-6">
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

          <form className="mt-10">
            <label htmlFor="discount-code-mobile" className="block text-sm font-medium text-gray-700">
              Discount code
            </label>
            <div className="mt-1 flex space-x-4">
              <input
                id="discount-code-mobile"
                name="discount-code-mobile"
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
              />
              <button
                type="submit"
                className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Apply
              </button>
            </div>
          </form>

          <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
            
            <div className="flex justify-between">
              <dt>Taxes</dt>
              <dd className="text-gray-900">{taxes} MAD</dd>
            </div>
          </dl>
        </DisclosurePanel>

        <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
          <span className="text-base">Total</span>
          <span className="text-base">{total} MAD</span>
        </p>
      </Disclosure>
    </section>
  )
}

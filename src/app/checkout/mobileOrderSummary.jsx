'use client'

import { useEffect, useState } from 'react'
import { getProductsFromCart } from '@/app/cart/cart';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link';


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
            {products.map((product, index) => (
              <li key={index} className="flex space-x-6 py-6">
                <img
                  alt={product.imageAlt}
                  src={product.value.image}
                  className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
                />
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-1 text-sm font-medium">
                    <h3 className="text-gray-900">{product.value.title}</h3>
                    <p className="text-gray-900">{product.value.price} MAD</p>
                    {/* <p className="text-gray-500">{product.color}</p> */}
                    <p className="text-gray-500">Size: {product.value.size}</p>
                  </div>
                  <div className="flex space-x-4">
                    <Link href={"/cart"} className="text-sm font-medium text-black hover:text-black">
                      Edit
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>

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

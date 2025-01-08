'use client'

import { useEffect, useState } from 'react'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import { XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import { getProductsFromCart, removeFromCart } from './cart'
import Link from 'next/link'


export default function Cart() {

  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let p = 0;
    let products = getProductsFromCart();
    products.map((product, productIdx) => {
      p += product.value.price;
    });
    setPrice(p);
    setProducts(products);
  }, []);

  const handleRemove = (product) => {
    removeFromCart(product.id);
    setPrice(price - product.price);
    setProducts(getProductsFromCart());
  };

  return (
    <div className="bg-white">

      <header className="relative bg-white">
        <Navbar />
      </header>

      <main className="mx-auto max-w-2xl px-4 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Cart</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="sm:max-h-[274px] sm:overflow-x-hidden sm:overflow-y-auto divide-y divide-gray-200 border-b border-t border-gray-200">
              {products.map((product, productIdx) => (
                <li key={productIdx} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.value.image}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a href={product.value.href} className="inline-block max-w-52 truncate font-medium text-gray-700 hover:text-gray-800">
                              {product.value.title}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product.value.category}</p>
                          {product.value.size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.value.size}</p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{product.value.price} MAD</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                          Quantity, {product.name}
                        </label>

                        {/*<input type="number" min={1} placeholder='1' name={`quantity-${productIdx}`} id={`quantity-${productIdx}`}
                          className="w-1/2 rounded-md border border-gray-300 py-1.5 text-left text-base font-medium 
                          leading-5 text-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm" /> 
                        */}
                        <div className="absolute right-0 top-0" onClick={() => handleRemove(product.value)}>
                          <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <XMarkIconMini aria-hidden="true" className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Orders
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Sub total</dt>
                <dd className="text-sm font-medium text-gray-900">{price} MAD</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Total</dt>
                <dd className="text-base font-medium text-gray-900">{price} MAD</dd>
              </div>
            </dl>

            <div className="mt-6">
              <Link
                href={"/checkout"}
                className="inline-block text-center w-full rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </Link>
            </div>
          </section>
        </div>

        <section aria-labelledby="policies-heading" className="mt-8"></section>
      </main>

      <Footer />
    </div>
  )
}

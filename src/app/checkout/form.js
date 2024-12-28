'use client'

import { LockClosedIcon } from '@heroicons/react/20/solid'


export default function Form() {
  return (
    <section
      aria-labelledby="payment-heading"
      className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
    >
      <div className="mx-auto max-w-lg">
        <form className="mt-6" >
          <div className="grid grid-cols-12 gap-x-4 gap-y-6">
            <div className="col-span-full">
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                Card number
              </label>
              <div className="mt-1">
                <input
                  id="card-number"
                  name="card-number"
                  type="text"
                  autoComplete="cc-number"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-8 sm:col-span-9">
              <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                Expiration date (MM/YY)
              </label>
              <div className="mt-1">
                <input
                  id="expiration-date"
                  name="expiration-date"
                  type="text"
                  autoComplete="cc-exp"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-4 sm:col-span-3">
              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <div className="mt-1">
                <input
                  id="cvc"
                  name="cvc"
                  type="text"
                  autoComplete="csc"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <div className="mt-1">
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-9">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <div className="mt-1">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                Postal code
              </label>
              <div className="mt-1">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Pay
          </button>

          <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
            <LockClosedIcon aria-hidden="true" className="mr-1.5 h-5 w-5 text-gray-400" />
            Payment details are securely stored.
          </p>
        </form>
      </div>
    </section>
  )
}

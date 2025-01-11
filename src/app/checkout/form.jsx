'use client'

import SuccessAlert from '@/common/sucess-alert';
import { LockClosedIcon } from '@heroicons/react/20/solid'

import { useFormState } from 'react-dom';
import { checkoutAction } from './actions';
import { FormButton } from './form-button';


const initialState = {
  message: null,
  errors: {},
};

export default function Form() {

  const [state, formaAction] = useFormState(checkoutAction, initialState);

  return (
    <section
      aria-labelledby="payment-heading"
      className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
    >
      {state?.success && <SuccessAlert subject='Payment Successful' object='' />}
      <div className="mx-auto max-w-lg">
        <form className="mt-6" action={formaAction} >
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
                  defaultValue={state?.inputs?.email}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
              {state?.errors?.email && <p className="text-xs text-red-500">{state?.errors?.email.length > 1 ? state?.errors?.email[1] : state?.errors?.email[0]}</p>}
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
                  defaultValue={state?.inputs?.cardNumber}
                  autoComplete="cc-number"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
              {state?.errors?.cardNumber && <p className="text-xs text-red-500">{state?.errors?.cardNumber.length > 1 ? state?.errors?.cardNumber[1] : state?.errors?.cardNumber[0]}</p>}
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
                  defaultValue={state?.inputs?.expirationDate}
                  autoComplete="cc-exp"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
              {state?.errors?.expirationDate && <p className="text-xs text-red-500">{state?.errors?.expirationDate.length > 1 ? state?.errors?.expirationDate[1] : state?.errors?.expirationDate[0]}</p>}
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
                  defaultValue={state?.inputs?.cvc}
                  autoComplete="csc"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
              {state?.errors?.cvc && <p className="text-xs text-red-500">{state?.errors?.cvc.length > 1 ? state?.errors?.cvc[1] : state?.errors?.cvc[0] }</p>}
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <div className="mt-1">
                <input
                  id="address"
                  name="address"
                  defaultValue={state?.inputs?.address}
                  type="text"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
              {state?.errors?.address && <p className="text-xs text-red-500">{state?.errors?.address.length > 1 ? state?.errors?.address[1] : state?.errors?.address[0]}</p>}
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
                  defaultValue={state?.inputs?.city}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
              {state?.errors?.city && <p className="text-xs text-red-500">{state?.errors?.city.length > 1 ? state?.errors?.city[1] : state?.errors?.city[0]}</p>}
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
                  defaultValue={state?.inputs?.postalCode}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
              {state?.errors?.postalCode && <p className="text-xs text-red-500">{state?.errors?.postalCode.length > 1 ? state?.errors?.postalCode[1] : state?.errors?.postalCode[0]}</p>}
            </div>
          </div>

          <FormButton />

          <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
            <LockClosedIcon aria-hidden="true" className="mr-1.5 h-5 w-5 text-gray-400" />
            Payment details are securely stored.
          </p>
        </form>
      </div>
    </section>
  )
}

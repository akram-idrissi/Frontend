'use client'


import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'


const filters = [
  {
    id: 'color',
    name: 'Couleur',
    options: [
      { value: 'blanc', label: 'Blanc' },
      { value: 'beige', label: 'Beige' },
      { value: 'bleu', label: 'Bleu' },
      { value: 'marron', label: 'Marron' },
      { value: 'vert', label: 'Vert' },
      { value: 'violet', label: 'Violet' },
    ],
  },
  {
    id: 'category',
    name: 'Categories',
    options: [
      { value: 'pants', label: 'Pants' },
      { value: 't-shirts', label: 'T-shirts' },
      { value: 'hats', label: 'Hats' },
      { value: 'jackets', label: 'Jackets' },
    ],
  },
  {
    id: 'sizes',
    name: 'Tailles',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]


export default function MobileFilter({mobileFiltersOpen, setMobileFiltersOpen}) {

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4">
              {filters.map((section) => (
                <Disclosure key={section.name} as="div" className="border-t border-gray-200 pb-4 pt-4">
                  <fieldset>
                    <legend className="w-full px-2">
                      <DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                        <span className="text-sm font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 rotate-0 transform group-data-[open]:-rotate-180"
                          />
                        </span>
                      </DisclosureButton>
                    </legend>
                    <DisclosurePanel className="px-4 pb-2 pt-4">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              id={`${section.id}-${optionIdx}-mobile`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}-mobile`}
                              className="ml-3 text-sm text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </fieldset>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}

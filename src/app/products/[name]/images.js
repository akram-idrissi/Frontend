'use client'

import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'

export default function Images({ images }) {

  return (
    <TabGroup className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="amx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none overflow-auto">
        <TabList className="m-4 inline-flex gap-6">
          {images.map((image, index) => (
            <Tab
              key={index}
              className="group relative flex w-32 h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <img alt="" src={image} className="h-full w-full object-cover object-center" />
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-black"
              />
            </Tab>
          ))}
        </TabList>
      </div>

      <TabPanels className="aspect-h-1 aspect-w-1 w-full">
        {images.map((image, index) => (
          <TabPanel key={index}>
            <img
              alt="image"
              src={image}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

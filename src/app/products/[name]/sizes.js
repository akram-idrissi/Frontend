'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'


export default function Sizes({ sizes }) {
  const [selectedSize, setSelectedSize] = useState()

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">Size</h2>
      </div>

      <fieldset aria-label="Choose a size" className="mt-2">
        <RadioGroup
          value={selectedSize}
          onChange={setSelectedSize}
          className="grid grid-cols-3 gap-3 sm:grid-cols-6"
        >
          {sizes.map((size, id) => (
            <Radio
              key={id}
              value={size}
              className='cursor-pointer flex items-center justify-center rounded-md 
                        border border-gray-200 bg-white px-3 py-3 text-sm 
                        font-medium uppercase text-gray-900 hover:bg-gray-50 
                        data-[checked]:border-transparent data-[checked]:bg-black
                      data-[checked]:text-white data-[focus]:ring-2 data-[focus]:ring-black 
                        data-[focus]:ring-offset-2 data-[checked]:hover:bg-black sm:flex-1'
            >
              {size}
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>
    </div>
  )
}

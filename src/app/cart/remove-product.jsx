"use client"

import { removeFromCart } from './actions';
import { XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'

export default function RemoveFromCart({ product }) {

    const handleRemove = async (product) => {
        await removeFromCart(product.id, product.price);
      };

    return (
        <div>
            <div className="absolute right-0 top-0" onClick={() => handleRemove(product)}>
                <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Remove</span>
                    <XMarkIconMini aria-hidden="true" className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
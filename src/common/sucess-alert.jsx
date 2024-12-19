import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { XMarkIcon, CheckCircleIcon} from '@heroicons/react/20/solid'

export default function SuccessAlert({subject="Signin error: ", object="An error occured, Try again later."}) {
    const [show, setShow] = useState(true)
    return (
        <Transition show={show}>
            <div className="border border-green-800 absolute bottom-14 left-5 rounded-md bg-green-50 w-fit p-4 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">{subject}</p>
                    </div>
                    <div className="ml-4 text-sm text-green-700">
                        <p>{object}</p>
                    </div>
                    <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                            <button
                                type="button"
                                onClick={() => {{
                                    setShow(!show);
                                }}}
                                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    )
}

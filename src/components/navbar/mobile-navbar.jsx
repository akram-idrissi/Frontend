import Link from 'next/link'

import { Dialog, DialogPanel } from '@headlessui/react'
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'


export default function MobileNavbar({ isAuth, cartCount, navigation, mobileMenuOpen, setMobileMenuOpen }) {

    return (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-[100]" />
            <DialogPanel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="/logo.png"
                            className="h-8 w-auto"
                        />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="py-6">
                            {/* <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a> */}
                            <Link href="/cart" className="group -m-2 mr-4 flex items-center p-2">
                                <ShoppingBagIcon
                                    aria-hidden="true"
                                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                />
                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartCount}</span>
                                <span className="sr-only">items in cart, view bag</span>
                            </Link>

                            {
                                isAuth ?
                                    <>
                                        <Link href="/orders" className="group -m-2 mr-4 flex items-center p-2 font-semibold leading-6 text-gray-900">
                                            Your orders
                                        </Link>
                                        <Link href="/signout" className="group -m-2 mr-4 flex items-center p-2 font-semibold leading-6 text-gray-900">
                                            Sign out
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link href="/auth/signin" className="group -m-2 mr-4 flex items-center p-2 font-semibold leading-6 text-gray-900">
                                            Sign in
                                        </Link>
                                        <Link href="/auth/signup" className="group -m-2 mr-4 flex items-center p-2 font-semibold leading-6 text-gray-900">
                                            Sign up
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    );

}
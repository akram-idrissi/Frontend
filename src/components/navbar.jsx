'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Bars3Icon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const navigation = [
    { name: 'Pants', href: '/categories/pants' },
    { name: 'T-shirts', href: '/categories/t-shirts' },
    { name: 'Hats', href: '/categories/hats' },
    { name: 'Jackets', href: '/categories/jackets' },
]

export default function Navbar({ sticky = false }) {
    const [auth, setAuth] = useState(true);
    const [cartCount, setCartCount] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const isAuth = localStorage.getItem("is-auth") == "true" ? true : false;
        setAuth(isAuth);

        const initialCount = parseInt(localStorage.getItem("products-counter")) || 0;
        setCartCount(initialCount);

        const handleStorageChange = () => {
            const updatedCount = parseInt(localStorage.getItem("products-counter")) || 0;
            setCartCount(updatedCount);
        };

        window.addEventListener("products-counter", handleStorageChange);
        return () => window.removeEventListener("products-counter", handleStorageChange);
    }, []);

    return (
        <header className={`${sticky && "sticky"} top-0 z-50 bg-white/60 backdrop-blur-lg`}>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src="/logo.png" className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Menu as="div" className="relative mr-4">
                        <div>
                            <MenuButton className="relative flex rounded-full text-sm focus:outline-none">
                                <UserIcon
                                    aria-hidden="true"
                                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                />
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            {
                                auth ?
                                    <>
                                        <MenuItem>
                                            <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                Your orders
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link href="/signout" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                Sign out
                                            </Link>
                                        </MenuItem>
                                    </>
                                    :
                                    <>
                                        <MenuItem>
                                            <Link href="/auth/signin" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                Sign in
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link href="/auth/signup" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                Sign up
                                            </Link>
                                        </MenuItem>
                                    </>
                            }
                        </MenuItems>
                    </Menu>
                    <Link href="/cart" className="group -m-2 mr-4 flex items-center p-2">
                        <ShoppingBagIcon
                            aria-hidden="true"
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartCount}</span>
                        <span className="sr-only">items in cart, view bag</span>
                    </Link>
                </div>
            </nav>
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
                                    auth ?
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
        </header>
    )
}

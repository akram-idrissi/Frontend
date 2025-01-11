import Link from 'next/link'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'


export default function DesktopNavbar({ isAuth, cartCount, navigation, setMobileMenuOpen }) {

    return (
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
                            isAuth ?
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
    );

}
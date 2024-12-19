'use client'


import Link from 'next/link';

const categories = [
    {
        id: 1,
        name: 'Pants',
        color: 'Black',
        price: '$35',
        href: '/categories/pants',
        imageSrc: 'https://brixtonllc.myshopify.com/cdn/shop/files/ktt73lle3htm6snfdo0g.jpg?format=pjpg&v=1724344416&width=460',
        imageAlt: ''
    },
    {
        id: 2,
        name: 'T-shirts',
        color: 'Black',
        price: '$35',
        href: '/categories/t-shirts',
        imageSrc: 'https://brixtonllc.myshopify.com/cdn/shop/products/gtpqfzujgvo7nl8nu0rn.jpg?format=pjpg&v=1719467101&width=1296',
        imageAlt: ''
    },
    {
        id: 3,
        name: 'Hats',
        color: 'Black',
        price: '$35',
        href: '/categories/hats',
        imageSrc: 'https://brixtonllc.myshopify.com/cdn/shop/files/swpmhc9e3fonb9dl4f9s.jpg?format=pjpg&v=1729841008&width=1296',
        imageAlt: ''
    },
    {
        id: 4,
        name: 'Jackets',
        color: 'Black',
        price: '$35',
        href: '/categories/jackets',
        imageSrc: 'https://brixtonllc.myshopify.com/cdn/shop/files/q73t3nc6wtonlag6qfue.jpg?format=pjpg&v=1729840751&width=460',
        imageAlt: ''
    },
]


export default function Categories() {

    return (
        <>
            <section aria-labelledby="trending-heading" className="bg-white">
                <div className="py-32 sm:py-40 lg:mx-auto lg:max-w-7xl lg:px-8">
                    <div className="flex pb-10 sm:pb-14 items-center sm:justify-center px-4 sm:px-6 lg:px-0">
                        <h2 id="trending-heading" className="font-abhaya text-5xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a]">
                            Our Categories
                        </h2>
                    </div>

                    <div className="relative mt-8">
                        <div className="relative w-full overflow-x-auto">
                            <ul
                                role="list"
                                className="pb-5 mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                            >
                                {categories.map((product) => (
                                    <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                                        <div className="group relative">
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200">
                                                <img
                                                    alt={product.imageAlt}
                                                    src={product.imageSrc}
                                                    className="h-full w-full object-cover object-center group-hover:scale-125 duration-300"
                                                />
                                            </div>
                                            <div className="mt-6">
                                                <h3 className="mt-1 font-semibold text-lg text-[#1a1a1a]">
                                                <Link href={{ pathname: product.href }}>
                                                    <span className="absolute inset-0" />
                                                    {product.name}
                                                </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    
                </div>
            </section>
        </>
    )
}

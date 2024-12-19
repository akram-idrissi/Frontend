'use client'

import Stars from "@/components/stars"


const trendingProducts = [
    {
        id: 1,
        name: 'Coors Colt Durham Jacket',
        href: 'products/24',
        imageSrc: 'https://brixtonllc.myshopify.com/cdn/shop/files/COORS_COLT_DURHAM_JKT_03461_WADNM_001.jpg?format=pjpg&v=1730918343&width=460',
        imageAlt: '',
    },
    {
        id: 2,
        name: 'hyaluronic acid jelly primer',
        href: 'products/45',
        imageSrc: 'https://brixtonllc.myshopify.com/cdn/shop/files/e35c984e69b1131e3805a1cea3092758daa9d722.jpg?format=pjpg&v=1721751091&width=460',
        imageAlt: '',
    },
    {
        id: 3,
        name: 'Coors Bandit Hat - Black',
        href: 'products/7',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0415/3819/1512/files/7100d4e99f00b3922ddb2a6a5ccc5ac7efc6a705.jpg?v=1728406572',
        imageAlt: '',
    },
    {
        id: 4,
        name: 'Ribbed City S Polo - Whitecap',
        href: 'products/67',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0415/3819/1512/files/wnkuadrmccmwbtbaosgn.jpg?v=1724867789',
        imageAlt: '',
    },
]


export default function BestSellers() {

    return (
        <>
            <section aria-labelledby="trending-heading" className="bg-white">
                <div className="pb-32 sm:pb-40 lg:mx-auto lg:max-w-7xl lg:px-8">
                    <div className="flex pb-10 sm:pb-14 items-center sm:justify-center px-4 sm:px-6 lg:px-0">
                        <h2 id="trending-heading" className="font-abhaya text-center text-5xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a]">
                            Best Sellers
                        </h2>
                    </div>

                    <div className="relative mt-8">
                        <div className="relative w-full overflow-x-auto">
                            <ul
                                role="list"
                                className="pb-5 mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                            >
                                {trendingProducts.map((product) => (
                                    <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                                        <div className="group relative">
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200">
                                                <img
                                                    alt={product.imageAlt}
                                                    src={product.imageSrc}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="mt-6">
                                                <h3 className="mt-1 lg:h-14 font-semibold text-lg text-[#1a1a1a]">
                                                    <a href={product.href}>
                                                        <span className="absolute inset-0" />
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                <div className="flex justify-center items-center">
                                                    <Stars numbers={[1, 2, 3, 4, 5]} />
                                                    <p className="ml-3 mt-1 text-black font-semibold text-lg">{product.price}</p>
                                                </div>
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

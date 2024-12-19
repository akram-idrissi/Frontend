import Image from 'next/image'
import { CheckBadgeIcon, CurrencyDollarIcon, TruckIcon } from '@heroicons/react/24/outline'


const features = [
    {
        name: 'High Quality:',
        description: 'Our clothing is crafted with premium materials, ensuring durability and a flawless finish.',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Affordable:',
        description: 'We offer high-quality fashion at prices accessible to everyone, without compromising on style or craftsmanship.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Fast Delivery:',
        description: 'Enjoy fast delivery of your favorite products straight to your door, so you can enhance your style without delay.',
        icon: TruckIcon,
    },
]

export default function Whyus() {
    return (
        <div className="overflow-hidden bg-white pb-32 sm:pb-40">
            <div className="flex pb-10 sm:pb-14 items-center sm:justify-center px-4 sm:px-6 lg:px-0">
                <h2 id="trending-heading" className="font-abhaya capitalize text-5xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a]">
                    Why choose us
                </h2>
            </div>

            <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline text-lg font-semibold text-[#1a1a1a]">
                                            <feature.icon aria-hidden="true" className="absolute left-0 h-7 w-7 text-[#111111]" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline text-[#666]">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="lg:flex items-start justify-end lg:order-first">
                        <img
                            alt="Product screenshot"
                            src="/why-us.png"
                            width={500}
                            height={500}
                            className="w-full sm:w-auto rounded-3xl max-w-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

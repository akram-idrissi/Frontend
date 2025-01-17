import { cookies } from "next/headers";
import Link from "next/link";

export default function CartOrderSummary() {

    const price = cookies().get("price")?.value || 0;

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Orders
            </h2>

            <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Sub total</dt>
                    <dd className="text-sm font-medium text-gray-900">{price} MAD</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Total</dt>
                    <dd className="text-base font-medium text-gray-900">{price} MAD</dd>
                </div>
            </dl>

            <div className="mt-6">
                <Link
                    href={"/checkout"}
                    className="inline-block text-center w-full rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                    Checkout
                </Link>
            </div>
        </section>
    );
}
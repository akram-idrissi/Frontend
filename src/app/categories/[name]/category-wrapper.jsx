"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import Filter from "./filter";
import MobileFilter from "./mobileFilter";

import Pagination from "./pagination";
import ProductsListing from "./productsListing";
import Breadcrumb from "@/components/breadcrumb";


export default function CategoryWrapper({ data, category }) {

    const router = useRouter();
    const breadcrumbLinks = [{ 'href': '', 'name': category }]

    const [totalPages] = useState(data.total_pages);
    const [currentPage, setCurrentPage] = useState(data.current_page);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        router.push(`?page=${newPage}`);
    };

    return (
        <>
            <MobileFilter mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
            <Breadcrumb links={breadcrumbLinks} />

            <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                <div className="border-b border-gray-200 pb-10 pt-20">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Nouveautés</h1>
                    <p className="mt-4 text-base text-gray-500">Découvrez nos dernières nouveautés ! </p>
                </div>

                <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                    <Filter setMobileFiltersOpen={setMobileFiltersOpen} />

                    <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                        <h2 id="product-heading" className="sr-only">
                            Products
                        </h2>
                        <>
                            <ProductsListing products={data.products} />
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                        </>
                    </section>
                </div>
            </main>
        </>
    );
}
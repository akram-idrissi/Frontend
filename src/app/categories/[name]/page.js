'use client'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useRouter } from 'next/navigation';

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


import Filter from './filter';
import MobileFilter from './mobileFilter';
import Breadcrumb from '@/components/breadcrumb';

import { getProductsByCategory } from './api';
import ProductsListing from './productsListing';
import Pagination from './pagination';


export default function CategoryListing() {
  const router = useRouter();
  const category = useParams()["name"];
  const searchParams = useSearchParams();
  const initialPage = parseInt(searchParams.get('page')) || 1;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const breadcrumbLinks = [
    { 'href': '', 'name': category }
  ]

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    router.push(`?page=${newPage}`); 
  };


  useEffect(() => {
    const fetchProducts = async (category, currentPage) => {
      try {
        const result = await getProductsByCategory(category, currentPage);
        setLoading(false);
        if (result.error) {
          setError(result.error);
        } else {
          setTotalPages(result.data.total_pages);
          setCurrentPage(result.data.current_page);
          setProducts(result.data.products);
        }
      } catch (err) {
        setLoading(false);
        setError("An error occurred while fetching the products.");
      }
    };

    fetchProducts(category, currentPage);
  }, [category, currentPage]);

  if (!products) return <div>Products not found.</div>;

  return (
    <div className="bg-white">
      <Navbar sticky={true} />

      {/* Mobile filter dialog */}
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
            {loading ? "Loading"  :
              <>
                <ProductsListing products={products} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}  />
              </>
            }
            {error && error}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

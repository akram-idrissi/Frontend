'use client'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation';

import Navbar from '@/components/navbar'
import Reviews from '@/components/reviews'
import Footer from '@/components/footer'
import { getProductById } from './api';


import Sizes from './sizes';
import Images from './images';
import Details from './details';
import Policies from './policies';
import AddToCart from './addToCart';
import Stars from '@/components/stars';
import RelatedProducts from './relatedProducts';
import Breadcrumb from '../../../components/breadcrumb';


const categoriesURI = "/categories";


export default function ProductPage() {
  const id = useParams()["name"];
  const [error, setError] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');

  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchProduct = async (id) => {
        const result = await getProductById(id);
        setError(result.error);
        setProduct(result.data);
        setLoading(result.loading);
    };

    fetchProduct(id);
  }, [id]);



  const breadcrumbLinks = [
    { 'href': `${categoriesURI}/${product ? product.category : ""}`, 'name': product ? product.category : "" },
    { 'href': '', 'name': product ? product.title : "" }
  ]

  return (
    <div className="bg-white">

      <Navbar sticky={true} />
      <Breadcrumb links={breadcrumbLinks} />

      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 pt-10">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            
            {/* Product info */}
            {error && <h1 className='text-xl'>error</h1>}
            {loading ? <h1 className='text-4xl'>Loading the product</h1> :
            <> 
              {/* Image gallery */}
              <Images images={product.image_srcs} />

              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.title}</h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">150 MAD</p>
                </div>

                {/* Reviews */}
                <div className="flex items-center mt-3">
                  <Stars numbers={[0, 1, 2, 3, 4]} />
                </div>

                {/* Size picker */}
                <Sizes sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>

                {/* Add to cart */}
                <AddToCart product={product} selectedSize={selectedSize} />

                {/* Product details */}
                <Details />

                {/* Policies */}
                <Policies />
              </div>
            </>
            }
          </div>

          <Reviews />
          <RelatedProducts category={category} productID={id} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

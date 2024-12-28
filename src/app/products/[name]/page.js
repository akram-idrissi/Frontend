'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';

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


export default function Example() {
  const id = useParams()["name"];
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const result = await getProductById(id);
        setLoading(false);
        if (result.error) {
          setError(result.error);
        } else {
          setProduct(result.data);
        }
      } catch (err) {
        setLoading(false);
        setError("An error occurred while fetching the product.");
      }
    };

    fetchProduct(id);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  const breadcrumbLinks = [
    { 'href': `${categoriesURI}/${product.category}`, 'name': product.category },
    { 'href': '', 'name': product.title }
  ]

  return (
    <div className="bg-white">

      <Navbar sticky={true} />
      <Breadcrumb links={breadcrumbLinks} />

      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 pt-10">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Images images={product.image_srcs} />

            {/* Product info */}
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
          </div>

          <Reviews />
          {<RelatedProducts />}
        </div>
      </main>

      <Footer />
    </div>
  )
}

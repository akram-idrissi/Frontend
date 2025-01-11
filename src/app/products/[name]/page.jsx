import Stars from '@/components/stars';
import Reviews from '@/components/reviews'
import Breadcrumb from '@/components/breadcrumb';

import { getProduct, getRelatedProducts } from './api';

import Images from './images';
import Details from './details';
import Policies from './policies';
import ClientWrapper from './wrapper';
import RelatedProducts from './relatedProducts';


const categoriesURI = "/categories";


export default async function ProductPage({ params, searchParams }) {

  const id = params.name;
  const category = searchParams.category;

  const product = await getProduct(id);
  const relatedProducts = await getRelatedProducts(category, id);

  const breadcrumbLinks = [
    { 'href': `${categoriesURI}/${category}`, 'name': category },
    { 'href': '', 'name': product ? product.title : "" }
  ]

  return (
    <div className="bg-white">

      <Breadcrumb links={breadcrumbLinks} />

      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 pt-10">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">

            {/* Product info */}

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

              {/* Sizes and Add to cart */}
              <ClientWrapper product={product} />

              {/* Product details */}
              <Details />

              {/* Policies */}
              <Policies />
            </div>
          </div>

          <Reviews />
          <RelatedProducts products={relatedProducts.products} />
        </div>
      </main>

    </div>
  )
}

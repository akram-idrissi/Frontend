import { getProductsFromCart } from './actions'
import RemoveFromCart from './remove-product';
import CartOrderSummary from './order-summary';


export default async function Cart() {

  const products = await getProductsFromCart();

  return (
    <div className="bg-white">

      <main className="mx-auto max-w-2xl px-4 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Cart</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="sm:max-h-[274px] sm:overflow-x-hidden sm:overflow-y-auto divide-y divide-gray-200 border-t border-gray-200">
              {
                products.cart.length === 0 ? "Your cart is empty" :
              products.cart.map((product, productIdx) => (
                <li key={productIdx} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.value.image}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a href={product.value.href} className="inline-block max-w-52 truncate font-medium text-gray-700 hover:text-gray-800">
                              {product.value.title}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product.value.category}</p>
                          {product.value.size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.value.size}</p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{product.value.price} MAD</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                          Quantity, {product.name}
                        </label>
                       
                        <RemoveFromCart product={product.value} />
                      </div>
                    </div>
                  </div>
                </li>
              ))
              }
            </ul>
          </section>

          {/* Order summary */}
          <CartOrderSummary />
        </div>

        <section aria-labelledby="policies-heading" className="mt-8"></section>
      </main>

    </div>
  )
}

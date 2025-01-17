import { addToCart } from '@/app/cart/actions';


export default function AddToCart({ product, selectedSize = "S" }) {

  const addToCartWithProduct = async () => {
    const cartItem = {
      id: product.id,
      href: `/products/${product.id}`,
      title: product.title,
      image: product.image_srcs[0],
      category: product.category,
      price: 145,
      size: selectedSize,
    };

    await addToCart(product.id, cartItem);
  };


  return (
    <form action={() => addToCartWithProduct()} className="mt-6">
      <div className="mt-10 flex">
        <button
          type="submit"
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Add to cart
        </button>

        <button
          type="button"
          className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
          <span className="sr-only">Add to favorites</span>
        </button>
      </div>
    </form>
  )
}

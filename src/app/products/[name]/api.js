const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getProduct = async (id) => {

  try {
    const url = `${backendURL}/api/products/${id}`;
    const response = await fetch(url, {cache: "no-store", method: "GET"});
    return await response.json();
  } catch (error) {
    return error.message || "An error occurred while fetching the product";
  }
};

export const getRelatedProducts = async (category, id) => {

  try {
    const url = `${backendURL}/api/similar-products/${category}/${id}`;
    const response = await fetch(url, {cache: "no-cache", method: "GET"});
    return await response.json();
  } catch (error) {
    return error.message || "An error occurred while fetching related product";
  }
};

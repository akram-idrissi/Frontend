const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getCategoryProducts = async (category, page=1, size=5) => {

  try {
    const url = `${backendURL}/api/categories/${category}?page=${page}`;
    const response = await fetch(url, {cache: "no-store", method: "GET"});
    return await response.json();
  } catch (error) {
    return error.message || "An error occurred while fetching category products";
  }
};
import axios from "axios";


const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const getProductsByCategory = async (category, page=1, size=5) => {
  const result = {loading: true, error: null, data: null};

  try {
    const response = await axios.get(`${backendURL}/api/categories/${category}?page=${page}`);
    result.data = response.data;
  } catch (error) {
    result.error = error.message || "An error occurred while fetching category products";
  } finally {
    result.loading = false;
  }
  return result;
};
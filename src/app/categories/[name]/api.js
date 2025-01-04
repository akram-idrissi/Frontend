const getCategoryProducts = async (category) => {

  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const url = `${backendURL}/api/categories/${category}?page=1`
  const response = await fetch(url, { method: "GET" }, { cache: 'no-store' });

  if (!response.ok) {
    return {
      success: false,
      status: response.status,
      message: 'An unexpected error occurred',
    }
  }
  return await response.json();
}

export default getCategoryProducts;
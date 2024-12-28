import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getOrders = async () => {
    const result = { loading: true, error: null, data: null };

    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(`${base_url}/api/orders/user/${user.id}/`);
        result.data = response.data;
    } catch (error) {
        result.error = "An error occurred while fetching orders";
    } finally {
        result.loading = false;
    }
    return result;
}
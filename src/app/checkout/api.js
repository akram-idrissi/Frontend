import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const checkout = async (paymentData) => {
    const result = {loading: true, error: null, data: null};

    try {
        let checkoutURL = `${base_url}/api/checkout/`;
        const response = await axios.post(checkoutURL, paymentData, { headers: {
                'Content-Type': 'application/json',
            }});
        result.data = response.data;
    } catch (error) {
        result.error = error.message || "An error occurred while checking out";
    } finally {
        result.loading = false;
    }

    return result;
}
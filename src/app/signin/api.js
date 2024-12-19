import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const login = async (loginData) => {
    const result = {loading: true, error: null, data: null};

    try {
        let loginURL = `${base_url}/api/signin/`;
        const response = await axios.post(loginURL, loginData, { withCredentials: true, headers: {
                'Content-Type': 'application/json',
            }});
        result.data = response.data;
    } catch (error) {
        result.error = error.message || "An error occurred while signin in";
    } finally {
        result.loading = false;
    }

    return result;
}
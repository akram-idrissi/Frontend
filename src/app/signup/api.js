import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const signup = async (signupData) => {
    const result = {loading: true, error: null, data: null};

    try {
        let signupURL = `${base_url}/api/signup/`;
        const response = await axios.post(signupURL, signupData, { withCredentials: true, headers: {
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
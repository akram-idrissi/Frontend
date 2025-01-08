import { cookies } from 'next/headers'

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getOrders = async () => {
    try {
        const user = JSON.parse(cookies().get("user").value);

        const url = `${backendURL}/api/orders/user/${user.id}`;
        
        const response = await fetch(url, { cache: "no-store", method: "GET" });
        const data =  await response.json();
        return data;
    } catch (error) {
        return error.message || "An error occurred while fetching orders";
    }
}

export const addOrder = async (order) => {
    try {
        const url = `${backendURL}/api/orders/add/`;
        const response = await fetch(url, {
            method: "POST",
            cache: "no-store", 
            body: JSON.stringify(order),
            headers: { 'Content-Type': 'application/json' }
        });
        return await response.json();
    } catch (error) {
        return error.message || "An error occurred while adding orders";
    }
}
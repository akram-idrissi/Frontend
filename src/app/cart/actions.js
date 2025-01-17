"use server"

import { cookies } from "next/headers"


export async function addToCart(key, value) {

    try {
        const rawCart = cookies().get("cart");
        const cart = rawCart ? JSON.parse(rawCart.value) : [];
        
        const existingIndex = cart.findIndex((pair) => pair.key === key);
        if (existingIndex !== -1)
            cart[existingIndex].value = value;
        else
            cart.push({ key, value });

        cookies().set("cart", JSON.stringify(cart));
        cookies().set("products-counter", cart.length);
        return {
            success: true,
            cart
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }

}

export async function removeFromCart(key) {
    try {
        const rawCart = cookies().get("cart");
        const cart = rawCart ? JSON.parse(rawCart) : [];

        const updatedPairs = keyValuePairs.filter((pair) => pair.key !== key);

        cookies().set("cart", JSON.stringify(updatedPairs));
        cookies().set("products-counter", updatedPairs.length);
        return {
            success: true,
            cart: cart
        };
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
};

export async function getProductsFromCart() {
    try {
        const rawCart = cookies().get("cart");
        const cart = rawCart ? JSON.parse(rawCart) : [];

        return {
            success: true,
            cart: cart
        };
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
};

export async function clearCart() {
    try {
        cookies().delete("cart");
        cookies().set("products-counter", 0);

        return { success: true };
    } catch (error) {
        return { success: false, error: error };
    }
}; 
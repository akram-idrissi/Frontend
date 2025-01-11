"use server"


import { z } from "zod";
import { addOrder } from "../orders/api";
import { cookies } from "next/headers";


const checkoutSchema = z.object({
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    cardNumber: z.string().regex(/^\d{16}$/, 'Card number must be 16 digits').nonempty('Card number is required'),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be in MM/YY format').nonempty('Expiration date is required'),
    cvc: z.string().regex(/^\d{3,4}$/, 'CVC must be 3 or 4 digits').nonempty('CVC is required'),
    address: z.string().min(5, 'Address must be at least 5 characters long').nonempty('Address is required'),
    city: z.string().min(10, 'City must be at least 10 characters long').nonempty('City is required'),
    postalCode: z.string().regex(/^\d{4,6}$/, 'Postal code must be between 4 and 6 digits').nonempty('Postal code is required'),
});

export async function checkoutAction(prevSate, formData) {

    const rawData = {
        email: formData.get('email-address'),
        cardNumber: formData.get('card-number'),
        expirationDate: formData.get('expiration-date'),
        cvc: formData.get('cvc'),
        address: formData.get('address'),
        city: formData.get('city'),
        postalCode: formData.get('postal-code'),
    };

    const data = checkoutSchema.safeParse(rawData);

    if (!data.success) {
        return {
            success: false,
            message: 'Please fix the errors in the form',
            errors: data.error.flatten().fieldErrors,
            inputs: rawData
        }
    }

    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await fetch(`${backendURL}/api/checkout/`, {
        method: "POST",
        body: JSON.stringify(data.data),
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        return {
            success: false,
            status: response.status,
            message: 'An unexpected error occurred',
        }
    }

    const res = await response.json();

    const user = JSON.parse(cookies().get("user").value);
    await addOrder({ email: user.email, price: 145, id: user.id, createdAt: "", status: "" });
    
    return {
        success: true,
        status: response.status,
    }
}
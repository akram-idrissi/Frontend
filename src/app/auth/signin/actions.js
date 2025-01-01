"use server"


import { redirect } from "next/navigation";
import { z } from "zod";


export async function signin(prevSate, formData) {

    const signInSchema = z.object({
        username: z.string().nonempty('Username is required'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters long')
            .nonempty('Password is required'),
    });

    const data = signInSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
    });
    
    if (!data.success) {
        return {errors: data.error.flatten().fieldErrors}
    }

    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await fetch(`${backendURL}/api/signin/`, {
        method: "POST",
        body: JSON.stringify(data.data),
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        return {
            message: errorResponse.detail || `Response status: ${response.status}`,
        };
    }
    const json = await response.json();
    console.log(json);
    redirect("/");
}
"use server"


import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


const signInSchema = z.object({
    username: z.string().max(15, 'Username must be at most 15 characters long').nonempty('Username is required'),
    password: z.string().min(8, 'Password must be at least 8 characters long').nonempty('Password is required'),
});

export async function signin(prevSate, formData) {

    const rawData = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    const data = signInSchema.safeParse(rawData);

    if (!data.success) {
        return {
            success: false,
            message: 'Please fix the errors in the form',
            errors: data.error.flatten().fieldErrors,
            inputs: rawData
        }
    }

    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await fetch(`${backendURL}/api/signin/`, {
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
    const json = await response.json();
    const cookieStore = cookies();
    cookieStore.set('user', JSON.stringify(json.user), { secure: true, priority: "high" })

    redirect("/")
}
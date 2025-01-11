"use client"

import Loader from "@/common/loader"
import { useEffect } from "react";
import { useFormStatus } from "react-dom"

export function FormButton() {
    const { pending } = useFormStatus();

    useEffect(() => {
        document.getElementsByTagName("body")[0].classList.add("overflow-x-hidden");
    }, []);

    return (
        <>
            {pending && <Loader />}
            <button
                type="submit"
                className="mt-6 w-full rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
                Pay
            </button>
        </>
    )
}
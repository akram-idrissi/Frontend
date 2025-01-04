"use client"

import Loader from "@/common/loader"
import { useFormStatus } from "react-dom"

export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <div>
            {pending && <Loader />}
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                Sign up
            </button>
        </div>
    )
}
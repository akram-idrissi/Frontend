"use client"

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

import { signup } from "./actions";
import ErrorAlert from "@/common/error-alert";
import { SubmitButton } from "../components/submit-button";

const initialState = {
    message: null,
    errors: {},
};

export default function Signup() {

    const [state, formaAction] = useFormState(signup, initialState);
    const { pending } = useFormStatus();

    return (
        <>
            {state?.status === 400 && <ErrorAlert subject="Signup error: " object={state?.message} />}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <Link href={"/"} className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="/logo.png"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create a new Account
                    </h2>
                </Link>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action={formaAction} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    placeholder="jone doe"
                                    defaultValue={state?.inputs?.username}
                                    autoComplete="username"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                            {state?.errors?.username && <p className="text-xs text-red-500">{state?.errors?.username}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    required
                                    placeholder="jone@doe.com"
                                    defaultValue={state?.inputs?.email}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                            {state?.errors?.email && <p className="text-xs text-red-500">{state?.errors?.email}</p>}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    defaultValue={state?.inputs?.password}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                            {state?.errors?.password && <p className="text-xs text-red-500">{state?.errors?.password}</p>}
                        </div>

                        <SubmitButton />
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already member?{' '}
                        <Link href="/auth/signin" className="font-semibold leading-6 text-black hover:text-black">
                            Sign in Now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
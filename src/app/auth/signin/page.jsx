"use client"

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { signin } from "./actions";
import { useState } from "react";

const initialState = {
    message: null,
    errors: {},
};

export default function Signin() {

    const [state, formaAction] = useFormState(signin, initialState);
    const { pending } = useFormStatus();

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <Link href={"/"} className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="/logo.png"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </Link>

                <p className="sr-only">{state?.message}</p>
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
                                    autoComplete="username"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                            {state.errors.username && (
                                <p className="text-sm text-red-500">
                                    {state.errors.username}
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="reset-password" className="font-semibold text-black hover:text-black">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                            {state.errors.password && state.errors.password.length > 1 ? (
                                <p className="text-sm text-red-500">
                                    {state.errors.password[1]}
                                </p>
                            ) : 
                            (
                                <p className="text-sm text-red-500">
                                    {state.errors.password}
                                </p>
                            )
                            }
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={pending}
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link href="/signup" className="font-semibold leading-6 text-black hover:text-black">
                            Sign up Now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
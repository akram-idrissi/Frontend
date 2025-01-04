"use client"

import Link from "next/link";
import { useFormState } from "react-dom";

import { signin } from "./actions";
import ErrorAlert from "@/common/error-alert";
import { SubmitButton } from "../components/submit-button";

const initialState = {
    message: null,
    errors: {},
};

export default function Signin() {

    const [state, formaAction] = useFormState(signin, initialState);

    return (
        <>
            {state?.status === 401 && <ErrorAlert subject="Signin error: " object="Invalid credentials" />}
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
                                    required
                                    placeholder="jone doe"
                                    defaultValue={state?.inputs?.username}
                                    autoComplete="username"
                                    className={` ${state?.errors?.username ? 'border-red-500' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
                                />
                            </div>
                            {state?.errors?.username && (
                                <p className="text-xs text-red-500">
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
                                    required
                                    defaultValue={state?.inputs?.password}
                                    autoComplete="current-password"
                                    className={` ${state?.errors?.password ? 'border-red-500' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
                                />
                            </div>
                            {state?.errors?.password && (
                                <p className="text-xs text-red-500">
                                    {state.errors.password}
                                </p>
                            )}
                        </div>

                        <SubmitButton />

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
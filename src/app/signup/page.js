'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { signup } from "./api";
import Loader from "@/common/loader";
import ErrorAlert from "@/common/error-alert";
import { validateEmail, validatePassword, validateUsername } from "../signin/form-validation";


export default function Signup() {
    const router = useRouter();
    const [errors, setErrors] = useState({});
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState(false);
    const [response, setResponse] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignupForm = async (event) => {
        event.preventDefault();

        let usernameError = validateUsername(username);
        let emailError = validateEmail(email);
        let passwordError = validatePassword(password);

        if (usernameError || passwordError || emailError) {
            setErrors({ username: usernameError, email: emailError, password: passwordError });
            return;
        }

        setLoading(true);
        const result = await signup({ username, email, password });
        setError(result.error);
        setLoading(result.loading);
        if (result.data) {
            setResponse(result.data);
            localStorage.setItem("signup-success", "true");
            router.push("/signin");
        }
    }

    useEffect(() => {
        const isAuth = localStorage.getItem("is-auth");
        if (isAuth && isAuth === "true") {
            router.push("/");
        } else {
            router.push("/signup");
        }
    }, []);
    
    return (
        <>
            {loading && <Loader />}
            {error && <ErrorAlert subject="Signup error: " object="User with same credentials exists" />}
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
                    <form onSubmit={handleSignupForm} method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={(event) => { setErrors({ ...errors, username: "" }); setUsername(event.target.value) }}
                                    autoComplete="username"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.username && <div className="text-xs text-red-500">{errors.username}</div>}
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
                                    onChange={(event) => { setErrors({ ...errors, email: "" }); setEmail(event.target.value) }}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.email && <div className="text-xs text-red-500">{errors.email}</div>}
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
                                    onChange={(event) => { setErrors({ ...errors, password: "" }); setPassword(event.target.value) }}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.password && <div className="text-xs text-red-500">{errors.password}</div>}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already member?{' '}
                        <a href="signin" className="font-semibold leading-6 text-black hover:text-black">
                            Sign in Now
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

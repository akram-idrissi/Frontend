'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";
import { useRouter } from "next/navigation";
import ErrorAlert from "@/common/error-alert";

import { login } from "./api";
import { validatePassword, validateUsername } from "./form-validation";
import SuccessAlert from "@/common/sucess-alert";

export default function Signin() {
    const router = useRouter();
    const [errors, setErrors] = useState({});
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);


    const handleSigninForm = async (event) => {
        event.preventDefault();

        let usernameError = validateUsername(username);
        let passwordError = validatePassword(password);

        if (usernameError || passwordError) {
            setErrors({ username: usernameError, password: passwordError });
            return;
        }

        setLoading(true);
        const result = await login({ username, password });
        setError(result.error);
        setLoading(result.loading);
        if (result.data) {
            setResponse(result.data);
            localStorage.setItem('is-auth', "true");
            router.push("/");
        }
    }

    useEffect(() => {
        if (localStorage.getItem("signup-success") === "true") {
            setShowAlert(true);
            localStorage.removeItem("signup-success");
        }

        const isAuth = localStorage.getItem("is-auth");
        if (isAuth && isAuth === "true") {
            router.push(document.referrer || "/");
        } else {
            router.push("/signin");
        }
    }, []);

    return (
        <>
            {loading && <Loader />}
            {error && <ErrorAlert subject="Signin error: " object="Invalid credentials" />}
            {showAlert && <SuccessAlert subject="User created successfully" object="" />}
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

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSigninForm} method="post" className="space-y-6">
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

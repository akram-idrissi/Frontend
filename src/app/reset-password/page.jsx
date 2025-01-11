'use client'

import { useState } from "react";
import { validateConfirmPassword, validatePassword } from "../signin/form-validation";
import Link from "next/link";

export default function ResetPassword() {
    const [errors, setErrors] = useState({});
    const [password, setPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleResetPasswordForm = async (event) => {
        event.preventDefault();

        let oldpass = validatePassword(oldPassword);
        let pass = validatePassword(password);
        let newpass = validateConfirmPassword(password, newPassword);
        
        if (oldpass || pass || newpass) {
            setErrors({oldPassword: oldpass, password: pass, newPassword: newpass});
            return;
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <Link href={"/"} className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="/logo.png"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Reset Your password
                </h2>
            </Link>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleResetPasswordForm} method="POST" className="space-y-6">
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Old Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="old-password"
                                name="old-password"
                                type="password"
                                onChange={(event) => {setErrors({...errors, oldPassword: ""}); setOldPassword(event.target.value)}}
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.oldPassword && <div className="text-xs text-red-500">{errors.oldPassword}</div>  }
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                               New Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="new-password"
                                name="new-password"
                                type="password"
                                onChange={(event) => {setErrors({...errors, password: ""}); setPassword(event.target.value)}}
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.password && <div className="text-xs text-red-500">{errors.password}</div>  }
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                onChange={(event) => {setErrors({...errors, newPassword: ""}); setNewPassword(event.target.value)}}
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.newPassword && <div className="text-xs text-red-500">{errors.newPassword}</div>  }
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Reset Now
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Remember your account?{' '}
                    <a href="signin" className="font-semibold leading-6 text-black hover:text-black">
                        Sign in Now
                    </a>
                </p>
            </div>
        </div>
    )
}

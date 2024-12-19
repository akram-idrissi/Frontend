/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function NewsLetter() {
    return (
        <>
            <div className="bg-white px-4 sm:px-0 pb-32 sm:pb-40">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative isolate flex justify-between flex-col gap-10 overflow-hidden bg-[#000] px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
                        <div>
                            <h2 className="font-abhaya max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl xl:max-w-none xl:flex-auto">
                                Get up to 20% off !
                            </h2>
                            <p className="mt-2 leading-8 text-[#797979] text-sm">
                                Enjoy a promo code that will be sent to your email address.
                            </p>
                        </div>

                        <form className="w-full max-w-md">
                            <div className="flex gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Enter your mail"
                                    autoComplete="email"
                                    className="placeholder:text-black min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                        <svg
                            viewBox="0 0 1024 1024"
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                        >
                            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient
                                    r={1}
                                    cx={0}
                                    cy={0}
                                    id="759c1415-0410-454c-8f7c-9a820de03641"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(512 512) rotate(90) scale(512)"
                                >
                                    <stop stopColor="#ffffff" />
                                    <stop offset={1} stopColor="#ffffff" stopOpacity={0} />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

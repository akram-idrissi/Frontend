'use client'


export default function Error({ error, reset }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl my-10 p-6 lg:px-8">
                <h1 className="text-4xl font-bold">Something went wrong!</h1>
                <button className="border px-4 py-2 mt-4 border-black rounded-md font-medium"
                    onClick={() => reset()}>
                    Try again
                </button>
            </div>
        </div>
    )
}
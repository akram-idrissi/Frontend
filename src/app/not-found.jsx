import Link from "next/link";


export default async function Custom404() {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl my-10 p-6 lg:px-8">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg font-normal mt-4">Could not find requested resource</p>
        <Link href="/" className="font-bold mt-4 inline-block">Return Home</Link>
      </div>
    </div>
  )
}

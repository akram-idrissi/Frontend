import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getOrders } from "./api";

export default async function Orders() {

    const orders = await getOrders();     

    return (  
        <>
            <Navbar sticky={true} />
            <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl my-20">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Orders</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all your orders details.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="max-h-[350px] overflow-y-auto inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="sticky top-[-10px] bg-white">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Order ID
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Price
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Email
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Created At
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {!orders ? <tr><td>Loading...</td></tr> :
                                        <>
                                            {orders?.map((order, id) => (
                                                <tr key={id}>
                                                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                                        <div className="flex items-center">
                                                            <div className="ml-4">
                                                                <div className="font-bold text-gray-900">{order.orderID}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                        <div className="mt-1 text-gray-500">{order.price} MAD</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{order.email}</td>
                                                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                                        <div className="ml-3 font-medium text-gray-900">{order.createdAt}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

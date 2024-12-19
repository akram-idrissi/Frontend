import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'



export default function Pagination({ currentPage, onPageChange, totalPages }) {
    return (
        <nav className="mt-20 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className={`inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium ${currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        }`}
                >
                    <ArrowLongLeftIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />
                    Previous
                </button>
            </div>

            <div className="-mt-px flex w-0 flex-1 justify-end">
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className={`inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        }`}
                >
                    Next
                    <ArrowLongRightIcon aria-hidden="true" className="ml-3 h-5 w-5 text-gray-400" />
                </button>
            </div>
        </nav>
    )
}

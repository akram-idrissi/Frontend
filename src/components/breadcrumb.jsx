'use client'

import Link from 'next/link';


export default function Breadcrumb({ links, sticky=false }) {

  return (
    <div className={`${sticky && "sticky"} top-0 z-50 bg-white mt-10`}>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol role="list" className="border-b flex items-center space-x-4 py-4">
          <li>
            <div className="flex items-center">
              <a href='/' className="capitalize mr-4 text-sm font-medium text-gray-900">
                Home
              </a>
              <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
              </svg>
            </div>
          </li>

          {
            links.slice(0, -1).map((link, index) => (
              <span key={index} className='flex items-center'>
                <li className="text-sm">
                  <Link href={link.href} aria-current="page" className="mr-4 capitalize font-medium text-gray-500 hover:text-gray-600">
                    {link.name}
                  </Link>
                </li>
                <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                  <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                </svg>
              </span>
            ))
          }

          <li className="text-sm flex items-center">
            <span aria-current="page" className="inline-block max-w-32 sm:max-w-none truncate capitalize font-medium text-gray-500 hover:text-gray-600">
              {links[links.length - 1].name}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  )
}

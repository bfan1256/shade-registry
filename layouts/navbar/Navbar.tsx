import { Disclosure } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const checkSearch = (event: any) => {
    if (event.key === 'Enter') {
      router.push(`?query=${search}`)
    }
  }
  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 py-2 sm:px-4 lg:px-8">
            <div className="flex justify-between sm:justify-auto h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <button onClick={() => router.push('/')} className="items-center flex space-x-2">
                    <div className="flex space-x-4">
                      <Image
                        height={30}
                        width={30}
                        src="/logo.svg"
                        alt="logo"
                      />
                      <h1 className="text-xl mt-1 uppercase font-bold tracking-wide">Shade</h1>
                    </div>
                    <h1 className="text-xl mt-1 italic text-violet-500 -ml-3">Registry</h1>
                  </button>
                </div>
              </div>
              <div className="flex-1 xl:flex items-center justify-start px-2 lg:ml-6 lg:justify-start hidden">
                <div className="max-w-lg w-full lg:max-w-md">
                  <label htmlFor="search" className="sr-only">
                    Search a
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      onKeyDown={checkSearch}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 xl:mr-20 flex items-center">
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                  >
                    Models
                  </a>
                  {/* <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Datasets
                  </a> */}
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Docs
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Resources
                  </a>
                  <a
                    href="https://shaderobotics.com"
                    className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    To Main Site
                  </a>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden xl:ml-4 lg:flex lg:items-center">
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Sign In
                </a>
                <a
                  href="https://shaderobotics.com/contact"
                  className="block m-5 px-5 py-2 text-center font-medium text-sm text-white border-rose-400 border text-rose-400 hover:bg-rose-50 rounded-md"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Models
              </Disclosure.Button>
              {/* <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Datasets
              </Disclosure.Button> */}
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Docs
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Resources
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                To Main Site
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Sign In
              </Disclosure.Button>
              <div className="mt-5">
                <a
                    href="https://shaderobotics.com/contact"
                    className="block m-5 px-5 py-2 text-center font-medium text-sm text-white border-rose-400 border text-rose-400 hover:bg-rose-50 rounded-md"
                  >
                    Book a Demo
                  </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

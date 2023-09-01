import React, { useState } from 'react'

const Navbar = () => {
    const [nav, setnav] = useState(true)
    return (
        <>
            <header className="bg-[#121212] h-20 absolute w-full z-10">
                {/* navbar */}
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1 items-center ">
                        <div className='cursor-pointer mr-6' onClick={() => { setnav(!nav) }}>
                            <i className="fa-solid fa-bars fa-lg" style={{color: "#ffffff"}}></i>
                        </div>
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="text-2xl text-[#fff]">9Hacks</span>
                        </a>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="/" className="text-sm font-semibold leading-6 text-[#fff]">Home</a>
                        <a href="/demo" className="text-sm font-semibold leading-6 text-[#fff]">Demo</a>
                        <a href="/about" className="text-sm font-semibold leading-6 text-[#fff]">About us</a>
                    </div>
                </nav>

                {/* sidebar */}
                <div className={nav ? 'hidden' : ''} role="dialog" aria-modal="true">
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="text-2xl text-[#121212]">9Hacks</span>
                            </a>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => { setnav(!nav) }}>
                                <i className="fa-solid fa-xmark fa-lg absolute right-10 top-10 cursor-pointer" style={{ color: "#121212" }}></i>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                                    <a href="/demo" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Demo</a>
                                    <a href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar
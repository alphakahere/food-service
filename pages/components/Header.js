import React from 'react'

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <div className="flex items-center">
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
                <h1 className="text-xl ml-6">
                    <span className="font-bold text-3xl">Order</span> Something
                </h1>
            </div>
            <div className="relative">
                <input type="text" placeholder="Search"
                    className="bg-gray-100 w-80 h-10 rounded-lg px-3 placeholder-gray-400 font-medium outline-none"
                />
                <svg className="w-5 h-5 absolute bottom-2 left-72 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
        </header>
    )
}

export default Header

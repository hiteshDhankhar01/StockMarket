import React from 'react'

const Header = () => {
    return (
        <header className="flex items-center justify-between h-[3rem] px-3 text-white fixed top-0 z-50 w-full rounded-bl-lg rounded-br-lg border-b-[1px] backdrop-blur-[3px] bg-[#ffffff62]">
            <h1 className="logo text-[1.4rem] font-semibold ">StockMarket</h1>
            <ul className="flex gap-5 text-[1.1rem]">
                <li><a href="/">Home</a></li>
                <li>About</li>
                <li>Cotact Us</li>
                <button className="border-[1px] border-white h-fit rounded-full bg-[#3A0B41] ">
                    <a className="px-4 text-center mb-2 text-[1.4rem]" href="/login">
                        Login
                    </a>
                </button>
            </ul>
        </header>
    )
}

export default Header

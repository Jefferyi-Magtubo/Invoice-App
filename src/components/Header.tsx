import React from "react"
import { Outlet } from "react-router-dom"

export default function Header() {

    return(
        <>
            <header className="flex m-0 h-12 bg-darkGray">
                <div className="bg-purple w-12 rounded-r-xl flex justify-center items-center">
                    <img src="src/assets/logo.svg" />
                </div>
                <div className="ml-auto flex items-center justify-around">
                    <img src="src/assets/icon-moon.svg" className="m-2" />
                    <div className="w-px h-full bg-lightPurple m-2"></div>
                    <img src="src/assets/jeff.jpg" className="w-6 h-6 rounded-3xl m-2"/>
                </div>
            </header>  
            <Outlet />
        </>
    )
    
}
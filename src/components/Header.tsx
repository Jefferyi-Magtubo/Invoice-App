import React from "react"
import { Outlet } from "react-router-dom"
import { darkContext } from "../App"

export default function Header( {setDarkMode} : {setDarkMode: Function} ) {
    const darkMode = React.useContext(darkContext)

    return(
        <>
            <header className="flex m-0 h-12 bg-darkGray">
                <div className="bg-purple w-12 rounded-r-xl flex justify-center items-center">
                    <img src="/assets/logo.svg" />
                </div>
                <div className="ml-auto flex items-center justify-around">
                    {darkMode ? 
                        <img src="/assets/icon-sun.svg" onClick={()=> setDarkMode((prev : boolean) => !prev)} className="m-2 hover:cursor-pointer" /> : 
                        <img src="/assets/icon-moon.svg" onClick={()=> setDarkMode((prev : boolean) => !prev)}  className="m-2 hover:cursor-pointer" />}
                    <div className="w-px h-full bg-lightPurple m-2"></div>
                    <img src="/assets/jeff.jpg" className="w-6 h-6 rounded-3xl m-4"/>
                </div>
            </header>  
            <Outlet />
        </>
    )
    
}
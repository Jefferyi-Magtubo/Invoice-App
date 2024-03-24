import React from "react"
import { darkContext } from "../App"

export default function Invoice() {
    const darkMode = React.useContext(darkContext)

    return (

        <>
            <h2 className="hover:cursor-pointer p-4">
                <img src="/assets/icon-arrow-left.svg" className="inline-block mr-4" />
                <span className={`font-bold ${darkMode ? 'text-white' : ''}`}>Go Back</span>
            </h2>

            <section className={`${darkMode ? 'bg-darkModeBody' : 'bg-white'} mt-4 py-4 px-4 flex justify-between items-center rounded-lg w-11/12 mx-auto`}>
                <h2 className={`${darkMode ? 'text-darkModeSmallText' : 'text-lightGray'}`}>Status</h2>
                <h2 className="bg-orange-100 text-pending opacity-80 p-4 text-sm rounded-lg">Pending</h2>
            </section>
            
            <section className={`${darkMode ? 'bg-darkModeBody' :  'bg-white'} mt-4 mb-12  flex-col rounded-lg w-11/12 mx-auto`}>
                <h1 className="font-bold pt-4 px-4"><span className="text-lightGray">#</span>XM9141</h1>
                <h2 className="text-lightGray text-sm mb-4 px-4">Graphic Design</h2>

                <h2 className="text-lightGray text-sm px-4">19 Union Terace</h2>
                <h2 className="text-lightGray text-sm px-4">London</h2>
                <h2 className="text-lightGray text-sm px-4">E1 3EZ</h2>
                <h2 className="text-lightGray text-sm px-4">United Kingdom</h2>

                <div className="flex mt-4 px-4">
                    <div className="flex-col mr-16">
                        <h2 className={`${darkMode ? 'text-darkModeSmallText' : 'text-lightGray'} text-sm`}>Invoice Date</h2>
                        <h1 className="font-bold mb-4">21 Aug 2021</h1>

                        <h2 className={`${darkMode ? 'text-darkModeSmallText' : 'text-lightGray'} text-sm`} >Invoice Date</h2>
                        <h1 className="font-bold">21 Aug 2021</h1>
                    </div>

                    <div className="flex-col">
                        <p className={`${darkMode ? 'text-darkModeSmallText' : 'text-lightGray'} text-xs`}>Bill to</p>
                        <h1 className="font-bold">Alex Grim</h1>
                        <h2 className={`${darkMode ? 'text-darkModeSmallText' : 'text-lightGray'} text-xs`}>84 Church Way</h2>
                        <h2 className={`${darkMode ? 'text-darkModeSmallText' : 'text-lightGray'} text-xs`}>Bradford</h2>
                        <h2 className={`${darkMode ? 'text-darkModeSmallText' : 'text-lightGray'} text-xs`}>BD1 9PB</h2>
                        <h2 className={`${darkMode ? 'text-darkModeSmallText' : 'text-lightGray'} text-xs`}>United Kingdom</h2>
                    </div>
                </div>

                <h2 className={`${darkMode ? 'text-darkModeSmallText' : 'text-lightGray'} text-xs mt-6 px-4`}>Sent to</h2>
                <h1 className="font-bold px-4">alexgrim@mail.com</h1>   

                <section className={`flex-col mt-4 ${darkMode ? 'bg-darkModeSec' :'bg-gray-100'} rounded-b-xl`}>
                    <div className="flex justify-between items-center m-4 pt-4">
                        <div>
                            <h1 className="font-bold text-sm">Banner Design</h1>
                            <h1 className="font-bold text-sm text-lightGray">1 x $ 156.00</h1>
                        </div>
                        <h1 className="font-bold">$ 156.00</h1>
                    </div>

                    <div className="flex justify-between items-center m-4">
                        <div>
                            <h1 className="font-bold text-sm">Email Design</h1>
                            <h1 className="font-bold text-sm text-lightGray">1 x $ 200.00</h1>
                        </div>
                        <h1 className="font-bold">$ 400.00</h1>
                    </div>

                    <div className="flex justify-between p-6 items-center bg-darkGray text-white rounded-b-lg">
                        <div>
                            <h1 className="text-sm">Grand Total</h1>
                        </div>
                        <h1 className="font-bold text-lg">$ 556.00</h1>
                    </div>
                </section>  
            </section>

            <footer className={`${darkMode ? 'bg-darkModeBody' : 'bg-white'} m-0 p-4 flex justify-between items-center `}>
                <h1 className={`bg-gray-100 font-bold text-lightGray text-sm py-2 px-5 rounded-2xl hover:cursor-pointer hover:bg-gray-700`}>Edit</h1>
                <h1 className={`bg-red-500 font-bold text-white text-sm py-2 px-5 rounded-2xl hover:cursor-pointer hover:bg-red-700`}>Delete</h1>
                <h1 className={`bg-purple font-bold text-white text-sm py-2 px-5 rounded-2xl hover:cursor-pointer hover:bg-violet-700`}>Mark as Paid</h1>
            </footer>
        </>

    )
}
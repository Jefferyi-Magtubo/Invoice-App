import React from "react";
import { darkContext } from "../App";

export default function Home() {
    const darkMode = React.useContext(darkContext)

    return (
        <div className=" h-100 p-0">
            <section className="flex items-center justify-between mx-4 pt-6 ">
                <div>
                    <h1 className="text-2xl font-bold">Inovices</h1>
                    <h2 className="text-sm text-lightGray">No Invoices</h2>
                </div>
                <div className="flex items-center text-sm hover:cursor-pointer">
                    <h2 className="mr-4">
                        Filter
                        <img src="src/assets/icon-arrow-down.svg" className="inline-block ml-2" />
                    </h2>
                    <h2 className="bg-purple p-2  rounded-full  hover:cursor-pointer text-white">
                        <img src="src/assets/icon-plus.svg" className="inline-block bg-white p-2 rounded-full mr-2" />
                        New
                    </h2>
                </div>
            </section>
            
            <section className="mx-auto mt-20 w-4/5 text-center">
                <img src="src/assets/illustration-empty.svg" className="w-100 mx-auto" />
                <h1 className="text-2xl">There is nothing here</h1>
                <p className={`text-xs  ${darkMode? "text-darkModeSmallText" : "text-lightGray" }`}>Create an invoice by clicking the New button and get started</p>
            </section>
        </div>
    );
}
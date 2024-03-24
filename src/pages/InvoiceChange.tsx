import React  from "react"
import { useForm } from 'react-hook-form'

import { darkContext } from "../App"

type FormFields = {
    addressFrom: string,
    cityFrom: string,
    postCodeFrom: string,
    countryFrom : string,
    client: string,
    email: string,
    clientAddress: string,
    clientCity: string,
    clientPostCode: string,
    clientCountry: string,
    date: string,
    description: string,
    items: {}[]
}
export default function InvoiceChange() {
    const darkMode = React.useContext(darkContext)

    const { register } = useForm()

    return (
        <>
            <h2 className="hover:cursor-pointer p-4">
                <img src="/assets/icon-arrow-left.svg" className="inline-block mr-4" />
                <span className={`font-bold ${darkMode ? 'text-white' : ''}`}>Go Back</span>
            </h2>
            
            <form className="mx-4 my-2 w-100">

                <h1 className={`font-bold text-xl`}>New Invoice</h1>
                <h2 className="text-purple text-sm font-bold mt-4 mb-4">Bill From</h2>

                <label htmlFor="addressFrom" className={`text-sm text-lightGray`}>Street Address</label>
                <input {...register('address')} type="text" placeholder="Address" className="border block font-bold py-2 px-4 w-full" id="addressFrom" />

                <div className="flex w-100 my-4 items-between">
                    <div className="flex-col mr-2">
                        <label htmlFor="cityFrom" className={`text-sm text-lightGray block`}>City</label>
                        <input {...register('cityFrom')} type="text" placeholder="City" className="border font-bold py-2 px-4 w-full" id="cityFrom" />                        
                    </div>

                    <div className="flex-col">
                        <label htmlFor="postCodeFrom" className={`text-sm text-lightGray block`}>Post Code</label>
                        <input {...register('postCodeFrom')} type="text" placeholder="Post Code" className="border font-bold py-2 px-4 w-full" id="postCodeFrom" />        
                    </div>
                </div>

                <label htmlFor="countryFrom" className={`text-sm text-lightGray`}>Country</label>
                <input {...register('countryFrom')} type="text" placeholder="Country" className="border block font-bold py-2 px-4 w-full" id="countryFrom" />

                <h2 className="text-purple text-sm font-bold mt-8 mb-4">Bill To</h2>

                <label htmlFor="client" className={`text-sm text-lightGray`}>Client's Name</label>
                <input {...register('client')} type="text" placeholder="Address" className="border block font-bold mb-4 py-2 px-4 w-full" id="client" />

                <label htmlFor="email" className={`text-sm text-lightGray`}>Client's Email</label>
                <input {...register('email')} type="text" placeholder="Email" className="border block font-bold mb-4 py-2 px-4 w-full" id="email" />

                <label htmlFor="clientAddress" className={`text-sm text-lightGray`}>Street Address</label>
                <input {...register('clientAddress')} type="text" placeholder="Address" className="border block font-bold py-2 px-4 w-full" id="clientAddress" />

                <div className="flex w-100 my-4 items-between">
                    <div className="flex-col mr-2">
                        <label htmlFor="clientCity" className={`text-sm text-lightGray block`}>City</label>
                        <input {...register('clientCity')} type="text" placeholder="City" className="border font-bold py-2 px-4 w-full" id="clientCity" />                        
                    </div>

                    <div className="flex-col">
                        <label htmlFor="clientPostCode" className={`text-sm text-lightGray block`}>Post Code</label>
                        <input {...register('clientPostCode')} type="text" placeholder="Post Code" className="border font-bold py-2 px-4 w-full" id="clientPostCode" />        
                    </div>
                </div>

                <label htmlFor="clientCountry" className={`text-sm text-lightGray`}>Country</label>
                <input {...register('clientCountry')} type="text" placeholder="Country" className="border block font-bold mb-8 py-2 px-4 w-full" id="clientCountry" />

                <label htmlFor="date" className={`text-sm text-lightGray`}>Date</label>
                <input {...register('date')} type="date" className="border block font-bold mb-4 py-2 px-4 w-full " id="date" />

                <label htmlFor="description" className={`text-sm text-lightGray`}>Description</label>
                <input {...register('description')} type="text" className="border block font-bold mb-16 py-2 px-4 w-full " id="description" />

                <h1>Item List</h1>

            </form>  
            
        </>
    )
}
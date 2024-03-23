

    export default function Invoice() {

        return (
        
            <div className="p-4">
                <h2 className="hover:cursor-pointer">
                    <img src="src/assets/icon-arrow-left.svg" className="inline-block mr-4" />
                    Go Back
                </h2>

                <section className="bg-white mt-4 py-4 px-4 flex justify-between items-center rounded-lg">
                    <h2 className=" text-lightGray">Status</h2>
                    <h2 className="bg-orange-100 text-pending p-4 text-sm rounded-lg">Pending</h2>
                </section>
                
                <section className="bg-white mt-4 py-4 px-4 flex-col rounded-lg">
                    <h1 className="font-bold"><span className="text-lightGray">#</span>XM9141</h1>
                    <h2 className="text-lightGray text-sm mb-4">Graphic Design</h2>

                    <h2 className="text-lightGray text-sm">19 Union Terace</h2>
                    <h2 className="text-lightGray text-sm">London</h2>
                    <h2 className="text-lightGray text-sm">E1 3EZ</h2>
                    <h2 className="text-lightGray text-sm">United Kingdom</h2>

                    <div className="flex mt-4">
                        <div className="flex-col mr-16">
                            <h2 className="text-lightGray text-sm">Invoice Date</h2>
                            <h1 className="font-bold mb-4">21 Aug 2021</h1>

                            <h2 className="text-lightGray text-sm" >Invoice Date</h2>
                            <h1 className="font-bold">21 Aug 2021</h1>
                        </div>

                        <div className="flex-col">
                            <p className="text-lightGray text-xs">Bill to</p>
                            <h1 className="font-bold">Alex Grim</h1>
                            <h2 className="text-lightGray text-xs">84 Church Way</h2>
                            <h2 className="text-lightGray text-xs">Bradford</h2>
                            <h2 className="text-lightGray text-xs">BD1 9PB</h2>
                            <h2 className="text-lightGray text-xs">United Kingdom</h2>
                        </div>
                    </div>

                    <h2 className="text-lightGray text-xs mt-6">Sent to</h2>
                    <h1 className="font-bold">alexgrim@mail.com</h1>   

                    <section className="flex-col mt-4 bg-gray-100 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1>Banner Design</h1>
                                <h1>1 x $ 156.00</h1>
                            </div>
                            <h1>$ 156.00</h1>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <h1>Email Design</h1>
                                <h1>1 x $ 200.00</h1>
                            </div>
                            <h1>$ 400.00</h1>
                        </div>

                        <div>

                        </div>
                    </section>  
                </section>
            </div>

        )
    }
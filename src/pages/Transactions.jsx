function Transactions(){

    const transactions = [
        { 
            id: "SVIIENI43IN34N4I",
            source: "GTB",
            customer_name: "Mike Owen", 
            customer_email: "02233434344", 
            amount: "$230.00", 
            request_date: "24.08.2021", 
            status: "Pending" 
        },
        { 
            id: "SVIIENI43IN34N4I",
            source: "UBA",
            customer_name: "Steven O'Shassy", 
            customer_email: "04903940934", 
            amount: "$480.00", 
            request_date: "24.08.2021", 
            status: "Successful" 
        },
        { 
            id: "SVIIENI43IN34N4I",
            source: "UBA",
            customer_name: "Steven O'Shassy", 
            customer_email: "04903940934", 
            amount: "$480.00", 
            request_date: "24.08.2021", 
            status: "Pending" 
        },
        { 
            id: "SVIIENI43IN34N4I",
            source: "UBA",
            customer_name: "Steven O'Shassy", 
            customer_email: "04903940934", 
            amount: "$480.00", 
            request_date: "24.08.2021", 
            status: "Pending" 
        }
    ]

    return (
        <>
            <div className="transaction__history border rounded-md border-gray-100">
                <div  className="border-b p-3"> 
                    <h1 className="font-bold">Transaction history</h1>
                </div>

                <div className="
                border-b 
                px-3 
                py-1 
                flex 
                justify-between 
                
                xxs:gap-3
                xs:gap-3
                sm:gap-3
                
                md:items-center
                lg:items-center
                xl:items-center
                xxl:items-center

                xxs:flex-col 
                xs:flex-col 
                sm:flex-col
                md:flex-row
                lg:flex-row
                xl:flex-row
                xxl:flex-row
                "> 
                    <div className="border rounded px-3 py-2 flex gap-2 items-center">
                        <input type="text"  placeholder="Search" className="w-full text-sm outline-none border-none" />
                        <div className="flex items-center">
                            <i className="bx bx-search cursor-pointer"></i>
                        </div>
                    </div>

                    <div className="
                    flex 
                    gap-4 
                    items-center
                    
                    xxs:justify-between
                    xs:justify-between
                    sm:justify-between
                    ">
                        <button className="flex items-center rounded-md gap-2 font-bold py-2 px-4 border border-black">
                            <span className="text-xs">Filter</span>
                            <i className='bx bx-filter'></i>
                        </button>
                        <button className="rounded-md py-2 px-4 border font-bold text-xs border-black">Export</button>
                    </div>
                </div>

                <div className="pt-4 overflow-x-auto">
                    <table className="border-collapse px-4 w-full transactions__table">
                        <thead className="text-sm">
                            <tr>
                                <th>Transaction ID</th>
                                <th>Source</th>
                                <th>Customer name</th>
                                <th>Customer email</th>
                                <th>Amount</th>
                                <th>Request date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs">
                        { 
                            transactions.map((transaction, index) => (  
                                <tr key={index} className="border-b hover:bg-gray-100" >
                                    <td>{transaction.id}</td>
                                    <td>{transaction.source}</td>
                                    <td>{transaction.customer_name}</td>
                                    <td>{transaction.customer_email}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.request_date}</td>
                                    <td>{transaction.status}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                
                <div className="pagination p-3 flex justify-end">
                    <div className="
                    grid 
                    grid-cols-9 
                    py-0.5 
                    text-gray-500 
                    border 
                    rounded 
                    w-3/12
                    xxs:w-11/12 
                    xs:w-11/12 
                    sm:w-8/12 
                    md:w-6/12 
                    lg:w-5/12 
                    xl:w-3/12 
                    xxl:w-3/12 
                    ">
                        <div className="flex items-center justify-center cursor-pointer">
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <p className="text-xs flex items-center justify-center w-5 h-5 rounded-full bg-gray-100">1</p>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <span className="text-xs">2</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <span className="text-xs">3</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <span>...</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <span className="text-xs">8</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <span className="text-xs">9</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <span className="text-xs">10</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <i className='bx bx-chevron-right'></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transactions
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const closeSidebar = () => {
        let sidebar = document.querySelector('#sidebar')
        sidebar?.classList.remove('show');
    }   

    return (
        <div id="sidebar" className="admin__sidenav h-full top-0 left-0 overflow-x-hidden pt-5 pl-7 fixed bg-yellow-50 ">

                <div className="flex flex-col justify-between h-full">

                    <div>
                        <div className="sidebar__logo">
                            <h1 className="font-bold text-xl">KLASHA</h1>
                            <i onClick={closeSidebar}  className='bx bx-x-circle pr-4 text-2xl text-gray-500 cursor-pointer'></i>
                        </div>

                        <div className="mt-7">
                            <h2 className="text-gray-400 text-sm">Main pages</h2>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            
                            <Link to="/" className={location.pathname === '/' ? 'active__link' : ''}>
                                <p className="flex items-center gap-2 cursor-pointer">
                                    <i className='bx bx-pie-chart-alt text-xl' ></i>
                                    <span className="text-sm">Dashboard</span>
                                </p>
                            </Link>

                            <p className="flex items-center gap-2 cursor-pointer">
                                <i className='bx bx-wallet text-xl' ></i>
                                <span className="text-sm">Balances</span>
                            </p>

                            <Link to="/transactions" className={location.pathname === '/transactions' ? 'active__link' : ''}>
                                <p className="flex items-center gap-2 cursor-pointer">
                                    <i className='bx bx-transfer text-xl' ></i>
                                    <span className="text-sm">Transactions</span>
                                </p>
                            </Link>

                            <p className="flex items-center gap-2 cursor-pointer">
                                <i className='bx bx-bar-chart-alt-2 text-xl' ></i>
                                <span className="text-sm">Analytics</span>
                            </p>

                            <p className="flex items-center gap-2 cursor-pointer">
                                <i className='bx bx-alarm text-xl' ></i>
                                <span className="text-sm">Marketing</span>
                            </p>

                            <p className="flex items-center gap-2 cursor-pointer">
                                <i className='bx bx-recycle text-xl'></i>
                                <span className="text-sm">Exchange rates</span>
                            </p>
                        </div>

                        <div className="mt-7">
                            <h2 className="text-gray-400 text-sm">Accept Payments</h2>
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <p className="flex items-center gap-2 cursor-pointer">
                                <i className='bx bx-cart text-xl'></i>
                                <span className="text-sm">Checkout</span>
                            </p>

                            <p className="flex items-center gap-2 cursor-pointer">
                                <i className='bx bx-link text-xl'></i>
                                <span className="text-sm">Payment Links</span>
                            </p>
                        </div>

                        <div className="mt-7">
                            <h2 className="text-gray-400 text-sm">Send Payments</h2>
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <p className="flex items-center gap-2 cursor-pointer">
                            <i className='bx bx-transfer text-xl' ></i>
                                <span className="text-sm">Wire</span>
                            </p>
                        </div>
                    </div>

                    <div className="mb-7">
                        <button className="flex items-center justify-between gap-2 mb-3 rounded-3xl py-2 px-3 background__red text-white w-fit">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white">
                                <i className='bx bx-question-mark text-xs'></i>
                            </div>
                            <span className="text-xs">Support</span>
                        </button>

                        <button className="flex items-center rounded-lg bg-transparent border border-black py-1 px-3 w-fit ">
                            <i className='bx bx-chevron-left text-xl'></i>                        
                            <span className="text-xs">Hide panel</span>
                        </button>

                    </div>
                </div>
                
            </div>
    )
}

export default Sidebar 
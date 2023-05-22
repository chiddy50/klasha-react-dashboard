import { Outlet } from "react-router-dom";
import Sidebar from '../components/SideBar';
import Header from '../components/Header';

function DefaultLayout() {

    return (
        <div className="min-h-screen">
            
            <Sidebar/>

            <div className="admin__main relative ">

                <Header />

                <div className="p-5 admin_content">
                   <Outlet />
                </div>

            </div>

        </div>
    )
}

export default DefaultLayout
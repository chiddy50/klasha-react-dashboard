import user_icon from '../assets/icons/user.svg'

const Header = () => {

    const toggleSidebar = () => {
        let sidebar = document.querySelector('#sidebar')
        sidebar?.classList.toggle('show');
    }   
    
    return (
        <div className="navbar shadow-sm px-10 flex items-center bg-white">
            <i onClick={toggleSidebar} className='
                bx bx-menu-alt-left
                cursor-pointer
                text-4xl
                sidemenu__control
                hover:text-blue-500
            '></i>
            
            <div className="flex items-center gap-3">
                <div className="flex items-center cursor-pointer">
                    {/* <i className='bx bx-user-circle text-3xl'></i> */}
                    <img src={user_icon} alt="dashboard icon" />
                    <i className='bx bx-chevron-down text-xl'></i>
                </div>
                <div className="flex items-center cursor-pointer">
                    <span className="text-md font-bold">En</span>
                    <i className='bx bx-chevron-down text-xl'></i>
                </div>
            </div>
        </div>
    )
}

export default Header
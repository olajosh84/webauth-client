import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar } from "../features/users/accountSlice";
import useOutsideClick from "../custom-hooks/useOutsideClick";

const Sidebar = () => {
    const { showSidebar } = useSelector(store => store.accountInfo);
    const sidebarRef = useRef();
    const dispatch = useDispatch();

    const handleActiveLink = (e) => {
        dispatch(hideSidebar());
        const sidebarParent =  e.target.parentElement.parentElement.parentElement;
        const sideBars = Array.from(document.querySelectorAll(".side-link"));
        sideBars.forEach(sideBar => {
            sideBar.classList.remove("active-link");
        })
        sidebarParent.classList.add("active-link");
    }
    useOutsideClick(sidebarRef, () => dispatch(hideSidebar()));
    return (
        <aside className={`capitalize bg-white dark:bg-gray-950 shadow-xl w-full transition-all animateSidebar md:basis-[30%] mmd:absolute mmd:max-w-[320px] mmd:z-10 ${showSidebar ? 'mmd:block' : 'mmd:hidden'}`} ref={sidebarRef}>
            <ul className="">
                <div className="px-4 py-2 mb-1 side-link active-link hover:bg-gray-100 dark:hover:bg-gray-900">
                    <li className="flex items-center">
                        <div className="flex gap-4">
                            <span>
                                <i className="fa-regular fa-user"></i>
                            </span>
                            <Link to="/account" onClick={handleActiveLink}>profile</Link>  
                        </div>
                    </li>  
                </div>
                <div className="px-4 py-2 mb-1 side-link hover:bg-gray-100 dark:hover:bg-gray-800">
                    <li className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <span>
                                <i className="fa-regular fa-envelope"></i>
                            </span>
                            <Link to="/account/messages" onClick={handleActiveLink}>Messages</Link> 
                        </div>
                        <span className="bg-blue-800 text-white text-center p-2 w-6 h-6 rounded-full flex flex-col justify-center items-center">4</span>
                    </li>
                </div>
                <div className="px-4 py-2 mb-1 side-link hover:bg-gray-100 dark:hover:bg-gray-900">
                    <li className="flex items-center justify-between">
                        <div className="flex gap-4">
                            <span>
                                <i className="fa-regular fa-bell"></i>
                            </span>
                            <Link to="/account/notifications" onClick={handleActiveLink}>notifications</Link>  
                        </div>
                        <span className="bg-red-800 text-white text-center p-2 w-6 h-6 rounded-full flex flex-col justify-center items-center">6</span>
                    </li>
                </div>
                <div className="px-4 py-2 mb-1 side-link hover:bg-gray-100 dark:hover:bg-gray-900">
                    <li className="flex items-center">
                        <div className="flex gap-4">
                            <span>
                                <i className="fa-solid fa-wrench"></i>
                            </span>
                            <Link to="/account/settings" onClick={handleActiveLink}>settings</Link>
                        </div>
                    </li>
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900">
                    <li className="flex gap-4">
                        <span>
                            <i className="fa-solid fa-sign-out"></i>
                        </span>
                        <Link to='/account/logout'>log out</Link>
                    </li>
                </div>
            </ul>
        </aside>
    )
}

export default Sidebar;
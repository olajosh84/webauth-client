import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import logo from "../assets/images/logo.png";
import { openSearchBar, closeSearchBar } from "../features/modals/searchSlice";

export default function Navbar () {
    const {isOpen} = useSelector(store => store.searchBar);
    let navLinksRef = useRef(null); 
    let menuBarRef = useRef(null);
    const dispatch = useDispatch();
    
    /**toggle the nav links */
    const handleToggleNavLinks = () => {
        let navLinksContainer = navLinksRef.current.parentNode;
        navLinksContainer.classList.toggle("show-links");
        let navLinksHeight = navLinksRef.current.getBoundingClientRect().height;
        if(navLinksContainer.classList.contains("show-links")){
            navLinksContainer.style.height = `${navLinksHeight}px`;
            menuBarRef.current.classList.add("hidden"); 
            menuBarRef.current.nextElementSibling.classList.remove("hidden");
        }else{
            navLinksContainer.style.height = "0px";
            menuBarRef.current.classList.remove("hidden"); 
            menuBarRef.current.nextElementSibling.classList.add("hidden");
        }
         
    }
    /***slide up nav links when you click any link */
    const slideUpNavLinks = (e) => {
        const menuBar = document.getElementById("menuBar");
        const menuOpenIcon = menuBar.firstElementChild;
        const menuCloseIcon = menuOpenIcon.nextElementSibling;
        let navLinksContainer = e.currentTarget.parentNode.parentNode;
        if(navLinksContainer.style.height > "0px"){
            navLinksContainer.classList.remove("show-links");
            navLinksContainer.style.height = "0px";
            menuOpenIcon.classList.remove("hidden");
            menuCloseIcon.classList.add("hidden");
        }
    }

    return (
        <nav className="w-full bg-white dark:bg-gray-950 dark:text-gray-200 shadow-xl z-20 sticky top-0 left-0 right-0">
            <div className="container transition-all mx-auto px-8 py-4 md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                        <Link to="/">
                            <img className="w-32" src={logo} alt="Logo" />
                        </Link>
                        {!isOpen && <span className="md:text-xl cursor-pointer" title="Toggle search bar" onClick={() => dispatch(openSearchBar())}>
                            <i className="fa-solid fa-search"></i>
                        </span>}
                        {isOpen && <span className="md:text-xl cursor-pointer" title="Toggle search bar" onClick={() => dispatch(closeSearchBar())}>
                            <i className="fa-solid fa-times"></i>
                        </span>}
                    </div>
                    <div id="menuBar" className="text-xl cursor-pointer md:hidden transition-all ease-in-out duration-1000" onClick={handleToggleNavLinks} title="Toggle menu">
                        <span ref={menuBarRef}>
                            <i className="fa-solid fa-bars"></i>
                        </span>
                        <span className="hidden">
                            <i className="fa-solid fa-times"></i>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col capitalize transition-all ease-in-out duration-1000 overflow-hidden h-0 md:!h-auto">
                    <ul id="showHideLinks" className="md:inline-flex md:items-center md:justify-center" ref={navLinksRef}>
                        <li className="pt-3 md:pt-0 md:pl-8 dark:hover:text-white" onClick={slideUpNavLinks}>
                            <NavLink to="/" >home</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0 md:pl-8 dark:hover:text-white" onClick={slideUpNavLinks}>
                            <NavLink to="/about" >about</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0 md:pl-8 dark:hover:text-white" onClick={slideUpNavLinks}>
                            <NavLink to="/contact">contact</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0 md:pl-8 dark:hover:text-white" onClick={slideUpNavLinks}>
                            <NavLink to="/blog">blog</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0 md:pl-8 dark:hover:text-white" onClick={slideUpNavLinks}>
                            <NavLink to="/account">account</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0 md:pl-8 dark:hover:text-white" onClick={slideUpNavLinks}>
                            <NavLink to="/login">sign in</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0  md:hidden md:pl-8">
                            <div className="flex gap-4 text-lg mt-4">
                                <span ><i className="fab fa-facebook text-blue-700 cursor-pointer"></i></span>
                                <span ><i className="fab fa-linkedin text-blue-700 cursor-pointer"></i></span>
                                <span ><i className="fab fa-instagram text-red-600 cursor-pointer"></i></span>
                                <span ><i className="fab fa-twitter text-sky-600 cursor-pointer"></i></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {isOpen && <Search/>}
        </nav>
    )
}
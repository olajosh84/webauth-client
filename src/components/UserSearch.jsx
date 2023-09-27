import { useRef } from "react";
import { useDispatch } from "react-redux";
import useOutsideClick from "../custom-hooks/useOutsideClick";
import { handleCloseUserSearchBar } from "../features/users/accountSlice";

const UserSearch = () => {
    const searchRef = useRef();
    const dispatch = useDispatch(); 

    useOutsideClick(searchRef, () => dispatch(handleCloseUserSearchBar())); //close user search bar on click-out

    return (
        <div className="absolute top-0 right-0 z-20 transition-all ease-linear duration-100 bg-white dark:bg-black shadow-lg rounded-full py-2 px-4 animateUserSearch" ref={searchRef}>
            <form className="flex gap-2 w-[50vw] lg:w-[30vw]">
                <input className="rounded-l-full outline-none focus:outline-sky-100 px-4 py-1 w-full dark:bg-gray-950" type="text" placeholder="Search..." />
                <button>
                    <i className="fa-solid fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default UserSearch
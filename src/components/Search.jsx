import { useRef } from "react";
import useOutsideClick from "../custom-hooks/useOutsideClick";
import { useDispatch } from "react-redux";
import { closeSearchBar } from "../features/modals/searchSlice";

export default function Search () {
    const searchbarRef = useRef();
    const dispatch = useDispatch();
    
    useOutsideClick(searchbarRef, () => dispatch(closeSearchBar()));
    
    return (
        <div className="fixed left-4 top-20 bg-white dark:bg-black shadow-lg rounded-l-lg rounded-r-lg w-[90vw] max-w-[450px] transition-all ease-in-out animateSearch" ref={searchbarRef}>
            <form className="flex gap-2 w-full">
                <input className="p-2 outline-none rounded-l-lg w-[90%] dark:bg-gray-950 focus:outline-sky-100" type="text" placeholder="Search..." />
                <button className="px-2 w-[10%] rounded-r-lg dark:bg-gray-950">
                    <i className="fa-solid fa-search"></i>
                </button>
            </form>
        </div>
    )
}
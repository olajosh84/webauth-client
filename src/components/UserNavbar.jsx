import { useSelector, useDispatch } from "react-redux";
import { handleShowSidebar, hideSidebar, handleShowUserSearchBar, handleCloseUserSearchBar } from "../features/users/accountSlice";
import { UserSearch } from "../components";

export default function UserNavbar () {
    const { showSidebar, showUserSearchBar } = useSelector(store => store.accountInfo);
    const { session } = useSelector(store => store.userData);
    const dispatch = useDispatch();

    return (
        <nav className="bg-white dark:bg-gray-950 shadow-xl py-2 px-4 my-4 flex justify-between items-center rounded-full relative overflow-hidden">
            <div className="flex gap-4">
                {!showSidebar && <span className="cursor-pointer md:hidden" onClick={() => dispatch(handleShowSidebar())}>
                    <i className="fa-solid fa-bars"></i>
                </span>}
                {showSidebar && <span className="cursor-pointer md:hidden" onClick={() => dispatch(hideSidebar())}>
                    <i className="fa-solid fa-times"></i>
                </span>}
                {!showUserSearchBar && <span className="cursor-pointer" onClick={() => dispatch(handleShowUserSearchBar())}>
                    <i className="fa-solid fa-search"></i>
                </span>}
                {showUserSearchBar && <span className="cursor-pointer" onClick={() => dispatch(handleCloseUserSearchBar())}>
                    <i className="fa-solid fa-times"></i>
                </span>}
            </div>
            <div className="flex items-center justify-center gap-1">
                <span>
                    <i className="fa-solid fa-caret-down"></i>
                    {/*<i className="fa-solid fa-angle-down"></i>*/}
                </span>
                <img className="w-8 h-8 rounded-full" src={require(`../assets/images/${session?.userAvatar ? session?.userAvatar : 'user.png'}`)} alt="" title="user avatar" />
            </div>
            {/**Searchbar component */}
            {showUserSearchBar && <UserSearch />}
        </nav>
    )
}
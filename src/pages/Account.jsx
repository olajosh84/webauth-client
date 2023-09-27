import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar, UserNavbar } from "../components";

export default function Account () {
    const { session } = useSelector(store => store.userData);
   
    return (
        <section className="section-basics">
            <h1 className="text-lg font-semibold animate-bounce">Hi, <span className="text-blue-800">{session?.username}</span></h1>
            {/*<p className="cursor-pointer" onClick={handleSignOut}>Sign Out {session?.username}</p>*/}
            <UserNavbar />
            <div className="md:flex md:gap-4 mmd:relative">
                <Sidebar />
                <div className="bg-white dark:bg-gray-950 shadow-xl w-full md:basis-[70%] pt-2 pb-4 px-4">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SharedLayout () {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    )
}
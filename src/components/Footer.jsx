import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
    return (
        <div className="w-full mt-auto bg-slate-900">
           <div className="text-gray-500 p-8 grid gap-8 md:grid-cols-3 md:justify-center">
                <div className="w-full">
                    <Link to="/">
                        <img src={logo} alt="" className="w-40 md:w-60" />
                    </Link>
                    <p>
                        <strong><i className="fa-solid fa-map-marker-alt"></i> </strong> 
                        Eko Hotels & Suites
                        Plot 1415 Adetokunbo Ademola Street, 
                        Victoria Island 106104, Lagos
                    </p>
                    <p><strong><i className="fa-solid fa-envelope"></i></strong> jekjosh@gmail.com</p>
                    <p><strong><i className="fa-solid fa-phone"></i></strong> 09088464747</p>
                    <div className="flex gap-4 text-lg mt-4">
                        <span className="bg-white w-8 h-8 rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-gray-800"><i className="fa-brands fa-facebook text-blue-700 cursor-pointer"></i></span>
                        <span className="bg-white w-8 h-8 rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-gray-800"><i className="fa-brands fa-linkedin text-blue-700 cursor-pointer"></i></span>
                        <span className="bg-white w-8 h-8 rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-gray-800"><i className="fa-brands fa-instagram text-red-600 cursor-pointer"></i></span>
                        <span className="bg-white w-8 h-8 rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-gray-800"><i className="fa-brands fa-twitter text-sky-600 cursor-pointer"></i></span>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-lg text-white capitalize">quick links</h1>
                    <ul className="capitalize leading-8">
                        <li className="hover:text-white">
                            <Link to="/">home</Link>
                        </li>
                        <li className="hover:text-white">
                            <Link to="/about" >about</Link>
                        </li>
                        <li className="hover:text-white">
                            <Link to="/contact">contact</Link>
                        </li>
                        <li className="hover:text-white">
                            <Link to="/blog">blog</Link>
                        </li>
                        <li className="hover:text-white">
                            <Link to="/account">account</Link>
                        </li>
                        <li className="hover:text-white">
                            <Link to="/login">sign in</Link>
                        </li>
                        <li className="hover:text-white">
                            <Link to="/signup">sign up</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <form>
                        <h1 className="capitalize text-lg text-white">join our newsletter</h1>
                        <p className="pb-4">Please subscribe to to our newsletter</p>
                        {/*<label className="text-white">Email</label>*/}
                        <div className="flex">
                            <input className="border border-slate-500 focus:outline-none w-full py-2 px-4 focus:border-none focus:outline-sky-300 rounded-l-full dark:bg-black dark:text-gray-200" placeholder="Email address" />
                            <button className="bg-violet-600 hover:bg-violet-800 text-white px-4 capitalize rounded-r-full" type="submit">submit</button>
                        </div>
                        
                    </form>
                </div>
           </div>
           <div className="text-white text-center p-8">
                <small className="">&copy; Copyright {new Date().getFullYear()}. Designed by Olajeks. All rights reserved </small> 
           </div>
        </div>
    )
}

export default Footer;
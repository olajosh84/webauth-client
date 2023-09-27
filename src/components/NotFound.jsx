import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <section className="section-basics">
            <div className="bg-black/20 shadow-xl rounded-xl flex flex-col gap-8 items-center justify-center mx-auto text-center p-8 text-gray-700">
                <h1 className="text-7xl text-red-800 md:text-9xl">404</h1>
                <p className="dark:text-gray-200">Sorry! The page or resource you are requesting for cannot be found. You may <Link to="/" className="text-blue-900 font-semibold">click here</Link> to go back home.</p>  
            </div>
        </section>
    )
}
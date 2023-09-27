import { Link } from "react-router-dom";
import services from "../assets/js/services";
import faqs from "../assets/js/faqs";
import bgImg from "../assets/images/bg-img.jpg"
import { Slide, Service, Faq } from "../components";

export default function Home(){

    return (
        <section>
             {/** SLIDER SECTION */}
            <Slide />
            {/** SERVICES SECTION */}
            <div className="my-4 p-4 mx-auto w-[95vw]">
                <h1 className="uppercase text-xl mb-2">services</h1>
                <div className="grid gap-4  md:grid-cols-3">
                    {
                        services.map(service => {
                            return <Service key={service.id} {...service} />
                        })
                    }
                </div> 
            </div>
            {/** FAQ SECTION */}
            <div className="my-4 p-4 w-[95vw] mx-auto">
                <h1 className="uppercase text-xl mb-2">FAQs</h1>
                <div className="grid gap-4">
                    {
                        faqs.map(faq => {
                            return <Faq key={faq.id} {...faq} />
                        })
                    }
                </div>
            </div>
             {/** FIXED IMAGED SECTION */}
             <div className="relative w-full h-60 bg-slate-400 bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${bgImg})`}}>
                {/** background image fixed */}
                <div className="bg-black w-full h-full bg-opacity-50 text-white flex flex-col items-center justify-center gap-4 p-4">
                    <h1 className="text-xl capitalize">blog posts</h1>
                    <p>Click the button below to check out our blog posts</p>
                    <button className="bg-transparent border-2 py-1 px-4 rounded-full capitalize transition-all ease-linear duration-200 hover:bg-sky-900">
                       <Link to="/blog">view posts</Link> 
                    </button>
                </div>
             </div>
        </section>
    )
}
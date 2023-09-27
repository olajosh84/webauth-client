import aboutImg from "../assets/images/about.jpg";

const About = () => {
    return (
        <section className="section-basics">
            <h1 className="section-title">about us</h1>
            <article className="bg-white dark:bg-gray-950 shadow-xl grid gap-8 p-4 rounded-lg md:grid-cols-2">
                <img src={aboutImg} alt="" className="w-full h-100 object-cover" />
                <div className="text-slate-800 text-[0.91rem] dark:text-gray-200">
                    <p className="mb-8 text-justify ">
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                    </p>
                    <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                    </p> 
                </div>
            </article>
        </section>
    )
}

export default About;
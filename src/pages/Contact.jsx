export default function Contact(){
    return (
        <section className="section-basics">
            <h1 className="section-title">contact us</h1>
                {/* google map */}
                <iframe className="w-full h-[45vh] max-h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7466825663037!2d3.427924514412075!3d6.42658279535032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e34fe6a84cddd53!2sEko%20Hotels%20%26%20Suites!5e0!3m2!1sen!2sng!4v1670853922564!5m2!1sen!2sng" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
                <article className="bg-white dark:bg-gray-950 dark:text-gray-200 shadow-xl flex flex-col gap-8 p-4 md:flex-row">
                    {/** contact info */}
                    <div className="text-gray-500 text-sm leading-8 w-full">
                        <p>
                            <strong><i className="fa-solid fa-map-marker-alt"></i> </strong> 
                            Eko Hotels & Suites
                            Plot 1415 Adetokunbo Ademola Street, Victoria Island 106104, Lagos
                        </p>
                        <p><strong><i className="fa-solid fa-envelope"></i></strong> jekjosh@gmail.com</p>
                        <p><strong><i className="fa-solid fa-phone"></i></strong> 09088464747</p>
                        <div className="flex gap-4 text-lg">
                            <span><i className="fab fa-facebook text-blue-700 cursor-pointer"></i></span>
                            <span><i className="fab fa-linkedin text-blue-700 cursor-pointer"></i></span>
                            <span><i className="fab fa-instagram text-red-600 cursor-pointer"></i></span>
                            <span><i className="fab fa-twitter text-sky-600 cursor-pointer"></i></span>
                        </div>
                    </div>
                    {/** contact form */}
                    <form className="space-y-8 w-full mb-4">
                        <input type="text" placeholder="Firstname" className="form-control" />
                        <input type="text" placeholder="Lastname" className="form-control" />
                        <input type="email" placeholder="Email" className="form-control" />
                        <textarea placeholder="Message" className="form-control" />
                        <button className="shadow-md shadow-slate-400 block border-2 border-slate-500 rounded-full py-1 capitalize px-4 bg-transparent text-center hover:bg-sky-600 hover:text-white hover:border-blue-500"  type="submit">submit</button>
                    </form>
                    
                </article>
        </section>
    )
}
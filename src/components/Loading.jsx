export default function Loading ({text}) {
    return (
        <section className="section-basics flex flex-col gap-4 items-center mt-40">
            <svg className="w-8 h-8 md:w-12 md:h-12 animate-spin dark:text-gray-200" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z" fill="currentColor" /> <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor" /> </svg>
            <h1 className="text-xl capitalize dark:text-gray-200">{text}</h1>
        </section>
    )
}
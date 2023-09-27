const BackToTop = () => {

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <button className="fixed bg-blue-900 text-white bottom-11 right-8 z-50 px-3 py-2 rounded-lg transition-all ease-linear duration-200 hover:bg-opacity-100 animate-pulse" onClick={handleScrollToTop}>
            <i className="fa-solid fa-arrow-up text-lg"></i>
        </button>
    )
}
    
export default BackToTop
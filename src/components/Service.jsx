
const Service = ({title, img, text}) => {
    return (
        <div className="bg-white dark:bg-gray-950 dark:text-gray-200 shadow-xl flex flex-col gap-4 items-center justify-center p-4 rounded-lg transition-all ease-linear duration-500 hover:bg-sky-700 dark:hover:bg-sky-950 hover:text-white hover:-translate-y-1">
            <img src={require(`../assets/images/${img}`)} alt="" className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-white " />
            <p className="text-lg capitalize">{title}</p>
            <p>
                {text} 
            </p>
        </div>
    )
}

export default Service;
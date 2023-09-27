import { Link } from "react-router-dom";

const Post = ({id, title, img, text, author, date}) => {
    return (
        <article className="bg-white dark:bg-gray-950 dark:text-gray-200 shadow-xl block">
            <Link to={`/blog/${id}`}>
                <img src={require(`../assets/images/${img}`)} alt="" className="w-full h-[250px] object-cover md:h-[500px]" />
            </Link>
            <div className="flex gap-2 px-4 pt-2">
                <small className="capitalize"><i className="fa-solid fa-user"></i> {author}</small>
                <small className="capitalize"><i className="fa-solid fa-clock"></i> {date}</small>
            </div>
            <Link to={`/blog/${id}`}>
                <h1 className="text-2xl capitalize px-4 pt-2">{title}</h1>
            </Link>
            <p className="px-4 py-4">
                {text}
            </p>
            <Link to={`/blog/${id}`}>
                <button className="bg-transparent border-2 border-sky-600 text-center px-4 py-1 ml-4 rounded-full my-4 transition-all ease-in-out duration-200 hover:bg-sky-600 hover:text-white">Read more</button>
            </Link>
        </article>
    )
}

export default Post;
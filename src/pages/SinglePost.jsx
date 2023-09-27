import { useParams, Navigate } from "react-router-dom";
import posts from "../assets/js/posts";

const SinglePost = () => {
    const {postId} = useParams();
    const singlePost = posts.find(post => post.id === Number(postId));
    if(!singlePost){
        return <Navigate to="/notFound" replace={true} />
    }
    const {img, title, text, author, avatar, bio, date} = singlePost;
   
    return (
        <section className="section-basics text-gray-700 max-w-[1000px]">
            <article className="bg-white dark:bg-gray-950 dark:text-gray-200 shadow-xl block">
                <img src={require(`../assets/images/${img}`)} alt="" className="w-full h-[250px] object-cover md:h-[500px]" />
                <h1 className="text-2xl capitalize px-4 pt-2">{title}</h1>
                <div className="flex gap-2 px-4">
                    <small className="capitalize"><i className="fa-solid fa-user"></i> {author}</small>
                    <small className="capitalize"><i className="fa-solid fa-clock"></i> {date}</small>
                </div>
                <div className="px-4 py-8">
                    <p className="pb-4">
                       {text}
                    </p>
                    <p className="pb-4">
                        Lorem ipsum loquacoius neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore
                        Lorem ipsum loquacoius neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore
                    </p>
                </div>
                <div className="flex gap-4 p-4 border-t">
                    <img className="w-[80px] h-[80px] rounded-full" src={require(`../assets/images/${avatar}`)}  alt="" />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg capitalize font-semibold">{author}</h3>
                        <p className="">{bio}</p> 
                    </div>
                    
                </div>
            </article>
        </section>
    )
}

export default SinglePost;
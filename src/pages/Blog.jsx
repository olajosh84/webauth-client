import posts from "../assets/js/posts";
import { Post } from "../components";

export default function Blog(){
    return (
        <section className="section-basics text-gray-700 max-w-[1000px]">
            <h1 className="section-title">blog</h1>
            <div className="grid gap-8">
                {
                    posts.map(post => {
                        return <Post key={post.id} {...post} />
                    })
                }
            </div>
        </section>
    )
}

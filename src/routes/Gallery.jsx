import { useEffect, useState } from "react"
import { supabase } from "../client"
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const Gallery = () => {
    const [posts, setPosts] = useState(null);

    const getPosts = async () => {
        const { data } = await supabase
            .from("Character")
            .select().order('created_at ', { descending: true })
        setPosts(data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            {posts && posts.map((post) => {
                return (
                    <div key={post.id} className="card mt-2 ml-2 w-96 bg-neutral text-neutral-content">
                        <section className="card-body card-bordered">
                            <h2 className="card-title">{post.name}</h2>
                            <div className="card-side">
                                <p>{post.age}</p>
                                <p>{post.class}</p>
                                <p>{post.strength}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`/edit/${post.id}`}>
                                    <FaLink />
                                </Link>
                            </div>
                        </section>
                    </div>
                )
            })}
        </>
    )
}

export default Gallery
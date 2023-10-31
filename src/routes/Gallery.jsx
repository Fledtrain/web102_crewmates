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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mt-4">
                {posts && posts.map((post) => {
                    return (
                        <div key={post.id} className="card w-72 bg-neutral text-neutral-content">
                            <section className="card-body card-bordered">
                                <h2 className="card-title">Name: {post.name}</h2>
                                <div className="card-side">
                                    <p>Age: {post.age}</p>
                                    <p>Class: {post.class}</p>
                                    {post.subclass === "" ? null : <p>SubClass: {post.subclass}</p>}
                                    <p>Strength: {post.strength}</p>
                                </div>
                                <section className="flex justify-between mt-4">
                                    <div className="card-actions">
                                        <Link to={`/edit/${post.id}`}>
                                            <button className="btn btn-square">Edit</button>
                                        </Link>
                                    </div>
                                    <div className="card-actions">
                                        <Link to={`/details/${post.id}`}>
                                            <button className="btn btn-square">View</button>
                                        </Link>
                                    </div>
                                </section>
                            </section>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery
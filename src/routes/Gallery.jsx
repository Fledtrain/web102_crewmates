import { useEffect, useState } from "react"
import { supabase } from "../client"
import { Link } from "react-router-dom";

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
            <div>Gallery</div>
            {posts && posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h2>{post.name}</h2>
                        <p>{post.age}</p>
                        <p>{post.class}</p>
                        <p>{post.strength}</p>
                        <Link to={`/edit/${post.id}`}>Link</Link>
                    </div>
                )
            })}
        </>
    )
}

export default Gallery
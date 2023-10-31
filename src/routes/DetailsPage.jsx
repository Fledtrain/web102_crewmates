import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../client"


const DetailsPage = () => {
    const params = useParams()
    const [post, setPost] = useState(null)

    /** Function to get a character from the database
     */
    const getPost = async () => {
        const { data } = await supabase
            .from("Character")
            .select()
            .eq("id", params.id)
        setPost(data)
    }

    useEffect(() => {
        getPost()

    }, [])

    return (
        <>
            <div>
                {post && post?.map((post) => {
                    return (
                        <section key={post?.id}>
                            <h2 className="text-4xl hero text-white">Name: {post?.name}</h2>
                            <p>Age: {post?.age}</p>
                            <p>Class: {post?.class}</p>
                            {post?.subclass === "" ? null : <p>SubClass: {post?.subclass}</p>}
                            <p>Strength: {post?.strength}</p>
                        </section>
                    )
                })}
            </div>
        </>
    )
}

export default DetailsPage
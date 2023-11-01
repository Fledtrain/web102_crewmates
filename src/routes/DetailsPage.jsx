import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
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
            <div className="hero-overlay p-20">
                {post && post?.map((post) => {
                    return (
                        <>
                            <section key={post?.id} className="text-center ">
                                <h2 className="text-5xl hero text-white ">Name: {post?.name}</h2>
                                <p className="text-3xl mt-6">Age: {post?.age}</p>
                                <p className="text-3xl mt-6">Class: {post?.class}</p>
                                {post?.subclass === "" ? null : <p className="text-3xl mt-6">SubClass: {post?.subclass}</p>}
                                <p className="text-3xl mt-6">Strength: {post?.strength}</p>

                                <Link to={`/edit/${params.id}`}>
                                <button className="btn mt-10">Wanna Edit this Character?</button>
                                </Link>
                            </section>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default DetailsPage
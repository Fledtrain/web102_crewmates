import { useParams } from "react-router-dom"
import { supabase } from "../client"
import { useState } from "react"
import { useEffect } from "react"


const Edit = () => {
    const params = useParams()
    const [post, setPost] = useState(null)
    const [form, setForm] = useState({
        name: "",
        age: "",
        class: "",
        strength: "0"
    })

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

    const udatePost = async (e) => {
        
    }

    return (
        <>
            <div>
                {post && post.map((post) => {
                    return (
                        <div key={post.id} className="card w-72 bg-neutral text-neutral-content">
                            <section className="card-body card-bordered">
                                <h2 className="card-title">Name: {post.name}</h2>
                                <div className="card-side">
                                    <p>Age: {post.age}</p>
                                    <p>Class: {post.class}</p>
                                    <p>Strength: {post.strength}</p>
                                </div>
                                <div className="card-actions  justify-end">
                                    <button className="btn">Edit Character</button>
                                    <button className="btn">Delete Character</button>
                                </div>
                            </section>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Edit
import { Link, useParams } from "react-router-dom"
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

    const updatePost = async (e) => {
        e.preventDefault()

        if (form.name === "") setForm({ name: post.name })
        if (form.age === "") setForm({ age: post.age })
        if (form.class === "") setForm({ class: post.class })
        if (form.strength === "") setForm({ strength: post.strength })
        // await supabase
        //     .from("Character")
        //     .update({ name: form.name, age: form.age, class: form.class, strength: form.strength })
        //     .eq("id", params.id)
    }

    const deletePost = async (e) => {
        e.preventDefault()
        await supabase
            .from("Character")
            .delete()
            .eq("id", params.id)

        Link("/")
    }

    return (
        <>
            <div className="p-10">
                {post && post.map((post) => {
                    return (
                        <div key={post.id} className="card w-80 bg-neutral text-neutral-content">
                            <section className="card-body card-bordered">
                                <h2 className="card-title">Name: {post.name}</h2>
                                <div className="card-side">
                                    <p>Age: {post.age}</p>
                                    <p>Class: {post.class}</p>
                                    <p>Strength: {post.strength}</p>
                                </div>
                            </section>
                            <section className="card-body card-bordered">
                                <div className="card-side">
                                    <form >
                                        <input
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            type="text"
                                            placeholder="Enter Name"
                                            className="input input-bordered max-w-xs" />
                                    </form>
                                </div>
                                <div className="card-actions  justify-end">
                                </div>
                            </section>
                        </div>
                    )
                })}
                <aside className="pt-5  ">
                    <form >
                        <button className="btn mr-4" onClick={updatePost}>Edit Character</button>
                        <button className="btn" onClick={deletePost}>Delete Character</button>
                    </form>
                </aside>
            </div>
        </>
    )
}

export default Edit
import { Link, useParams } from "react-router-dom"
import { supabase } from "../client"
import { useState } from "react"
import { useEffect } from "react"

/** Returns the edit route
 * @returns Edit route
 */
const Edit = () => {
    const params = useParams()
    const [confirmEdit, setConfirmEdit] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [post, setPost] = useState(null)
    const [form, setForm] = useState({
        name: "",
        age: "",
        strength: ""
    })

    /** Function to get a character from the database
     */
    const getPost = async () => {
        const { data } = await supabase
            .from("Character")
            .select()
            .eq("id", params.id)
        setPost(data)
    }


    /** Function to update a character in the database
     * @param {Event} e - Event object
     */
    const updateCharacter = async (e) => {
        e.preventDefault()
        const updatedData = {
            name: form.name === "" ? post[0].name : form.name,
            age: form.age === "" ? Number(post[0].age) : Number(form.age),
            strength: form.strength === "" ? post[0].strength : form.strength
        };

        await supabase
            .from("Character")
            .update(updatedData)
            .eq("id", params.id)

        setConfirmEdit(true)

        setTimeout(() => {
            setConfirmEdit(false)
        }, 3500)
    }

    /** Function to delete a character in the database
     * @param {Event} e - Event object 
     */
    const deleteCharacter = async (e) => {
        e.preventDefault()
        await supabase
            .from("Character")
            .delete()
            .eq("id", params.id)

        setConfirmDelete(true)
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <>
            <div className="p-10">
                {post && post.map((post) => {
                    return (
                        <>
                            <div key={post.id} className="card w-80 bg-neutral text-neutral-content">
                                <section className="card-body ">
                                    <h2 className="card-title">Name: {post.name}</h2>
                                    <div className="card-side">
                                        <p>Age: {post.age}</p>
                                        <p>Class: {post.class}</p>
                                        <p>Strength: {post.strength}</p>
                                    </div>
                                </section>
                            </div>
                        </>
                    )
                })}
                <section className="grid grid-cols-3 ">
                    <div className="card w-80 bg-neutral text-neutral-content mt-2 mr-2">
                        <section className="card-body">
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
                    <div className="card w-80 bg-neutral text-neutral-content mt-2">
                        <section className="card-body">
                            <div className="card-side">
                                <form >
                                    <input
                                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                                        type="text"
                                        placeholder="Enter Age"
                                        className="input input-bordered max-w-xs" />
                                </form>
                            </div>
                            <div className="card-actions  justify-end">
                            </div>
                        </section>
                    </div>
                    <div className="card w-80 bg-neutral text-neutral-content mt-2 ">
                        <section className="card-body">
                            <div className="card-side">
                                <form >
                                    <span >Strength Level: {form.strength}</span>
                                    <div className="flex w-64 p-2">
                                        <input
                                            onChange={(e) => setForm({ ...form, strength: e.target.value })}
                                            type="range"
                                            min="0"
                                            max="10"
                                            value={form.strength}
                                            className="range" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-actions justify-end">
                            </div>
                        </section>
                    </div>
                </section>
                <aside className="pt-5">
                    <form >
                        <button className="btn mr-4 btn-neutral" onClick={updateCharacter}>Edit Character</button>
                        <button className="btn btn-error" onClick={deleteCharacter}>Delete Character</button>
                    </form>
                    {confirmEdit ?
                        <>
                            <aside className="pt-10">
                                <div className="alert alert-success mb-10">Character Updated</div>
                                <Link to="/gallery">
                                    <button className="btn btn-neutral">Go to Gallery to see changes</button>
                                </Link>
                            </aside>
                        </>

                        : null}
                    {confirmDelete ?
                        <>
                            <aside className="pt-10">
                                <div className="alert alert-error mb-10">Character Deleted</div>
                                <Link to="/gallery">
                                    <button className="btn btn-neutral">Go to Gallery to see changes</button>
                                </Link>
                            </aside>
                        </>
                        : null}
                </aside>
            </div>
        </>
    )
}

export default Edit
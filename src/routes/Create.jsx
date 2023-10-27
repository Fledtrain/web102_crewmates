import { useState } from "react"
import { supabase } from "../client"

const Create = () => {

    const [form, setForm] = useState(
        {
            name: "",
            age: "",
            class: "",
            strength: "0"
        }
    )

    /** Function to create a post in the database
     * @param {Event} e - Event object 
     * 
     */
    const createPost = async (e) => {
        e.preventDefault()
        await supabase
            .from("Character")
            .insert([{ name: form.name, age: form.age, class: form.class, strength: form.strength }])
    }
    return (
        <>

            <section className="hero ">
                <form>
                    <h1 className="hero p-5 text-3xl ">Create your Character</h1>
                    <div className="pb-2">
                        <input
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            type="text"
                            placeholder="Enter Name"
                            className="input input-bordered max-w-xs" />
                    </div>
                    <input
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        type="text"
                        placeholder="Enter Age"
                        className="input input-bordered max-w-xs" />
                    <div className="pt-2">
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
                    </div>
                    <select
                        className="select select-bordered max-w-xs"
                        onChange={(e) => setForm({ ...form, class: e.target.value })}
                    >
                        <option value={'DEFAULT'} disabled selected>What Class do you want to be</option>
                        <option value={"Mage"}>Mage</option>
                        <option value={"Knight"}>Knight</option>
                        <option value={"Ranger"}>Ranger</option>
                        <option value={"Barbarian"}>Barbarian</option>
                    </select>
                    <div className="flex justify-center pt-3">
                        <button onClick={createPost} className="btn ">Create Post</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Create
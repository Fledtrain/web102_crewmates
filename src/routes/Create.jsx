import { useState } from "react"
import { supabase } from "../client"
import { Link } from "react-router-dom"

const Create = () => {

    const [form, setForm] = useState(
        {
            name: "",
            age: "",
            class: "",
            subClass: "",
            strength: "0"
        }
    )
    // For loading, alert, and created notifications
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)
    const [created, setCreated] = useState(false)

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (form.name === "" || form.age === "" || form.class === "") {
            setAlert(true)
            setLoading(false)

            setTimeout(() => {
                setAlert(false)
            }, 2000)
        }

        else {

            /** Function to create a post in the database
             * @param {Event} e - Event object 
            * 
            */
            const createPost = async () => {
                await supabase
                    .from("Character")
                    .insert([{ name: form.name, age: form.age, class: form.class, subclass: form.subClass, strength: form.strength }])
            }

            await createPost()
            setLoading(false)
            setCreated(true)
            setForm({ name: "", age: "", class: "", strength: "0", subClass: "" })
        }

        setTimeout(() => {
            setCreated(false)
        }, 5000)
    }
    return (
        <>

            <section className="hero ">
                <form>
                    <div className="p-2">
                        {alert ? <div className="alert alert-error">Please fill in all fields</div> : null}
                    </div>
                    <h1 className="hero p-5 text-4xl text-white">Create your Character</h1>
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
                        <option value={"Wizard"}>Wizard</option>
                        <option value={"Knight"}>Knight</option>
                        <option value={"Ranger"}>Ranger</option>
                        <option value={"Barbarian"}>Barbarian</option>
                    </select>
                    {form.class === "Wizard" &&
                        <>
                            <select
                                className="select select-bordered max-w-xs"
                                onChange={(e) => setForm({ ...form, subClass: e.target.value })}
                            >
                                <option value={'Arcane'} disabled selected>What Sub Class do you want to be</option>
                                <option value={"Arcane"}>Arcane</option>
                                <option value={"Necromancer"}>Necromancer</option>
                            </select>
                        </>
                    }
                    {form.class === "Knight" &&
                        <>
                            <select
                                className="select select-bordered max-w-xs"
                                onChange={(e) => setForm({ ...form, subClass: e.target.value })}
                            >
                                <option value={'Echo Knight'} disabled selected>What Sub Class do you want to be</option>
                                <option value={"Echo Knight"}>Echo Knight</option>
                                <option value={"Psi Warrior"}>Psi Warrior</option>
                            </select>
                        </>
                    }
                    {form.class === "Ranger" &&
                        <>
                            <select
                                className="select select-bordered max-w-xs"
                                onChange={(e) => setForm({ ...form, subClass: e.target.value })}
                            >
                                <option value={'Beast Master'} disabled selected>What Sub Class do you want to be</option>
                                <option value={"Beast Master"}>Beast Master</option>
                                <option value={"SwarmKeeper"}>SwarmKeeper</option>
                            </select>
                        </>
                    }
                    {form.class === "Barbarian" &&
                        <>
                            <select
                                className="select select-bordered max-w-xs"
                                onChange={(e) => setForm({ ...form, subClass: e.target.value })}
                            >
                                <option value={'Berserker'} disabled selected>What Sub Class do you want to be</option>
                                <option value={"Berserker"}>Berserker</option>
                                <option value={"Beast Barbarian"}>Beast Barbarian</option>
                            </select>
                        </>
                    }
                    <div className="flex justify-center pt-3">
                        {loading ?
                            <div className="loading"></div> :
                            <button onClick={submitForm} className="btn btn-neutral">Create Post</button>}
                    </div>
                    {created &&
                        <>
                            <section className="mt-2 text-center">
                                <div className="alert alert-success">Post Created</div>
                                <Link to="/gallery">
                                    <button className="btn btn-success mt-2 ">View your new Character here</button>
                                </Link>
                            </section>
                        </>
                    }
                    <aside className="mt-2 text-center">
                        <img src="./public/char1.png" className="w-96 " alt="Peak Gamer" />
                        <p className="text-white ">This can be you peak GAMER!</p>
                    </aside>
                </form>
            </section>
        </>
    )
}

export default Create
import { supabase } from "../client"

const Create = () => {
    /** Function to create a post in the database
     * @param {Event} e - Event object 
     * 
     */
    const createPost = async (e) => {
        e.preventDefault()
        await supabase
            .from("Character")
            .insert([{ name: "Fled", age: "23", class: "Mage", strength: "10" }])
    }
    return (
        <>
            <h1>Create</h1>
            <button onClick={createPost}>Create Post</button>
        </>
    )
}

export default Create
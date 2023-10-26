import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <section className="bg-slate-800 p-20 flex flex-col text-center s   ">
                <Link to="/">
                    <button className="btn m-2">Home</button>
                </Link>
                <Link to="/create">
                    <button className="btn m-2">Create Character</button>
                </Link>
                <Link to="/gallery">
                    <button className="btn m-2">Gallery</button>
                </Link>
            </section>
        </>
    )
}

export default Sidebar
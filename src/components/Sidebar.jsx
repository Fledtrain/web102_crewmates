import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <section className="bg-slate-800 p-20 flex flex-col text-center ">
                <h1 className="mb-10 text-white">GAMER CREATOR😈</h1>
                <Link to="/">
                    <button className="btn m-2 text-white">Home</button>
                </Link>
                <Link to="/create">
                    <button className="btn m-2 text-white">Create Character</button>
                </Link>
                <Link to="/gallery">
                    <button className="btn m-2 text-white">Gallery</button>
                </Link>
            </section>
        </>
    )
}

export default Sidebar
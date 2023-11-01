import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <nav className="bg-slate-800 p-20 flex flex-col text-center ">
                <h1 className="mb-10 text-white">GAMER CREATOR😈</h1>
                <Link to="/">
                    <button className="btn btn-neutral  m-2 ">Home</button>
                </Link>
                <Link to="/create">
                    <button className="btn btn-neutral m-2 ">Create Character</button>
                </Link>
                <Link to="/gallery">
                    <button className="btn btn-neutral m-2 ">Gallery</button>
                </Link>
                <div>

                    <img src="/Char2.webp" className="w-44 mt-28" alt="This could be your character" />
                </div>
            </nav>
        </>
    )
}

export default Sidebar
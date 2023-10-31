
const Home = () => {
    return (
        <>
            <div className="hero-overlay p-20">
                <h2 className='text-4xl hero text-white'>Welcome to Fledtrains Character Creation Tool</h2>
                <section className="hero text-xl" >
                    <p>
                        This tool is designed to help you create a character for your next D&D campaign.
                        You can create a character, edit a character, and delete a character.
                    </p>
                </section>
                <aside className="flex justify-center mt-5">
                    <img src="/Char2.webp" className="w-96 " alt="Stock Character" />
                </aside>
            </div>
        </>
    )
}

export default Home
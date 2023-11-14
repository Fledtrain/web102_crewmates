/**
 * @returns Home route
 */
const Home = () => {
    return (
        <>
            <div className="hero-overlay p-1 sm:p-20">
                <h2 className='text-2xl sm:text-4xl hero text-white'>Welcome to Fledtrains Character Creation Tool</h2>
                <section className="hero text-xl sm:text-2xl mt-6" >
                    <p>
                        This tool is designed to help you create a character for your next D&D campaign.
                        You can create a character, edit a character, and delete a character.
                    </p>
                </section>
                <aside className="flex justify-center mt-5">
                    <img src="/Char2.webp" className="w-52 sm:w-96 " alt="Stock Character" />
                </aside>
            </div>
        </>
    )
}

export default Home
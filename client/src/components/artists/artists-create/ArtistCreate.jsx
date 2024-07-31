export default function ArtistCreate() {
    return (
        <>
            <section
                id="create-artist"
                className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
            >
                <div className="form w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                        Add Artist
                    </h2>
                    <form className="create-artist-form space-y-4">
                        <input
                            type="text"
                            name="artistName"
                            id="artist-name"
                            placeholder="Artist Name"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <textarea
                            id="biography"
                            name="biography"
                            placeholder="Biography"
                            rows={5}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                            defaultValue={''}
                        />
                        <input
                            type="text"
                            name="style"
                            id="style"
                            placeholder="Style (Genre)"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="performanceTime"
                            id="performance-time"
                            placeholder="Performance Time"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="stage"
                            id="stage"
                            placeholder="Stage"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="socialMediaLinks"
                            id="social-media-links"
                            placeholder="Social Media Links"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Add Artist
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

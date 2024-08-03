export default function ArtistEdit() {
    return (
        <>
            <section
                id="create-artist"
                className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
            >
                <div className="form w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                        Edit Artist
                    </h2>
                    <form
                        // onSubmit={submitHandler}
                        className="create-artist-form space-y-4"
                    >
                        <input
                            type="text"
                            name="artistName"
                            id="artist-name"
                            placeholder="Artist Name"
                            // value={values.artistName}
                            // onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="imageUrl"
                            id="image-url"
                            placeholder="Image URL"
                            // value={values.imageUrl}
                            // onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <textarea
                            id="biography"
                            name="biography"
                            placeholder="Biography"
                            rows={5}
                            // value={values.biography}
                            // onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="appearanceDate"
                            id="appearance-date"
                            placeholder="Performance Date"
                            // value={values.appearanceDate}
                            // onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="stage"
                            id="stage"
                            placeholder="Stage"
                            // value={values.stage}
                            // onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Edit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default function StageCreate() {
    return (
        <>
            <section
                id="create"
                className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
            >
                <div className="form w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                        Add Stage
                    </h2>
                    <form className="create-form space-y-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Stage Name"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="imageUrl"
                            id="stage-image"
                            placeholder="Stage Image URL"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="category"
                            id="stage-category"
                            placeholder="Category"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="location"
                            id="stage-location"
                            placeholder="Stage Location"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="number"
                            name="capacity"
                            id="stage-capacity"
                            placeholder="Capacity (Number of People)"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <textarea
                            id="stage-description"
                            name="description"
                            placeholder="Description"
                            rows={4}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                            defaultValue={''}
                        />
                        <textarea
                            id="artist-lineup"
                            name="artistLineup"
                            placeholder="Artist Lineup Preview"
                            rows={3}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                            defaultValue={''}
                        />
                        <input
                            type="text"
                            name="date"
                            id="date"
                            placeholder="Stage Date"
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Add Stage
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

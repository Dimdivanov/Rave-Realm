export default function ArtistCatalogMenu() {
    return (
        <>
            {/* artist catalog menu component */}
            <div className="text-center">
                <h1 className="text-4xl text-white font-bold mb-4 text-center">
                    Artists
                </h1>
                <div className="flex justify-center mb-4 space-x-96">
                    <button className="bg-purple-700 px-4 py-2 rounded">Full list</button>
                    <button className="bg-purple-700 px-4 py-2 rounded">My Lineup</button>
                    <button className="bg-purple-700 px-4 py-2 rounded">
                        View Stages
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Search artists ..."
                    className="bg-purple-800 text-white rounded px-4 py-2 w-full max-w-lg mx-auto mb-8"
                />
            </div>
        </>
    );
}

import useFocusForm from '../../../../hooks/useFocusForm';

export default function ArtistCatalogMenu() {
    const ref = useFocusForm();

    return (
        <>
            {/* artist catalog menu component */}
            <div className="text-center">
                <h1 className="text-4xl text-white font-bold mb-6">Artists</h1>
                <div className="flex justify-center mb-4 space-x-4">
                    <button className="bg-purple-700 px-6 py-2 rounded text-white w-32">
                        Full list
                    </button>
                    <button className="bg-purple-700 px-6 py-2 rounded text-white w-32">
                        My Lineup
                    </button>
                    <button className="bg-purple-700 px-6 py-2 rounded text-white w-32">
                        My Stages
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Search artists ..."
                    ref={ref}
                    className="bg-purple-800 text-white rounded px-4 py-2 w-full max-w-lg mx-auto mb-8"
                />
            </div>
        </>
    );
}

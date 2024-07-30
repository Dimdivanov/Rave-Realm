import ArtistCatalogCard from './artist-catalog-card/ArtistCatalogCard';
import { useGetAllArtists } from '../../../hooks/useArtists';

export default function ArtistsCatalog() {
    const artists = useGetAllArtists();
    
    return (
        <>
            <section
                id="hero"
                className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 bg-black relative bg-gradient-to-b from-purple-800 to-rgb-400"
            >
                <div className="container mt-20 mx-auto px-4 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl text-white font-bold mb-4 text-center">
                            Artists
                        </h1>
                        <div className="flex justify-center mb-4 space-x-96">
                            <button className="bg-purple-700 px-4 py-2 rounded">
                                Full list
                            </button>
                            <button className="bg-purple-700 px-4 py-2 rounded">
                                My Lineup
                            </button>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {/* Artist Card */}
                        {artists.map((artist) => (
                            <ArtistCatalogCard key={artist._id} {...artist} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

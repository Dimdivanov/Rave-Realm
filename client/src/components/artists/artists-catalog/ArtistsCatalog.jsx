import { useState } from 'react';
import ArtistCatalogCard from './artist-catalog-card/ArtistCatalogCard';
import { useGetAllArtists } from '../../../hooks/useArtists';
import useFocusForm from '../../../hooks/useFocusForm';

export default function ArtistsCatalog() {
    const [searchedWord, setSearchedWord] = useState('');

    const artists = useGetAllArtists();
    const ref = useFocusForm();

    return (
        <>
            <section
                id="hero"
                className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 bg-black relative bg-gradient-to-b from-purple-800 to-rgb-400"
            >
                <div className="container mx-auto px-4 py-8 mt-24">
                    {/* artist catalog menu component */}
                    <div className="text-center">
                        <h1 className="mt-4 text-4xl text-white font-bold mb-6">
                            Artists
                        </h1>
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
                            name="search"
                            placeholder="Search artists"
                            ref={ref}
                            value={searchedWord}
                            onChange={(e) => setSearchedWord(e.target.value)}
                            className="bg-purple-800 text-white rounded px-4 py-2 w-full max-w-lg mx-auto mb-8"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {/* Artist Card Component */}
                        {artists
                            .filter((artist) => {
                                return artist.artistName
                                    .toLowerCase()
                                    .includes(searchedWord.toLowerCase());
                            })
                            .map((artist) => (
                                <ArtistCatalogCard key={artist._id} {...artist} />
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}

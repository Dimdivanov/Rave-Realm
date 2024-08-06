import { useContext, useState } from 'react';

import ArtistCatalogCard from './artist-catalog-card/ArtistCatalogCard';
import { useGetAllArtists } from '../../../hooks/useArtists';
import useFocusForm from '../../../hooks/useFocusForm';
import { AuthContext } from '../../../contexts/AuthContext';

export default function ArtistsCatalog() {
    const [searchedWord, setSearchedWord] = useState('');
    const artists = useGetAllArtists();
    const ref = useFocusForm();
    const { userId } = useContext(AuthContext);

    return (
        <div className="relative bg-black bg-gradient-to-b from-purple-800 to-rgb-400 min-h-screen">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8 mt-24">
                    <h1 className="text-4xl text-white font-bold mb-6">Artists</h1>
                    <div className="flex justify-center mb-4 space-x-4">
                        <button className="bg-purple-700 px-6 py-2 rounded text-white w-32">Full list</button>
                        <button className="bg-purple-700 px-6 py-2 rounded text-white w-32">My Lineup</button>
                        <button className="bg-purple-700 px-6 py-2 rounded text-white w-32">My Stages</button>
                    </div>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search artists"
                        ref={ref}
                        value={searchedWord}
                        onChange={(e) => setSearchedWord(e.target.value)}
                        className="bg-purple-800 text-white rounded px-4 py-2 w-full max-w-lg mx-auto"
                    />
                </div>
            </div>
            
            {/* Artist Catalog Section */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Artist Card Component */}
                    {artists
                        .filter((artist) => artist.artistName.toLowerCase().includes(searchedWord.toLowerCase()))
                        .map((artist) => (
                            <ArtistCatalogCard key={artist._id} {...artist} userId={userId} />
                        ))}
                </div>
            </section>
        </div>
    );
}

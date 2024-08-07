import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import MyLineupCard from './my-lineup-card/MyLineupCard';
import { getFilteredArtistDetails } from '../../util/userLineupHelper';

export default function MyLineUp() {
    const { email } = useContext(AuthContext);
    const filteredArtistDetails = getFilteredArtistDetails(email)
    
    return (
        <div className="relative bg-black bg-gradient-to-b from-purple-800 to-rgb-400 min-h-screen">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8 mt-24">
                    <h1 className="text-4xl text-white font-bold mb-6">My Lineup</h1>
                </div>
            </div>
            {/* Artist Catalog Section */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Artist Card Component */}
                    {filteredArtistDetails.map((filteredArtistDetails) => (
                        <MyLineupCard key={filteredArtistDetails._id} {...filteredArtistDetails} />
                    ))}
                </div>
            </section>
        </div>
    );
}

/*
 */

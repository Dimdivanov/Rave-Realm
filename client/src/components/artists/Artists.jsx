import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ArtistCard from './artistCard/ArtistCard';

const artists_URL = `http://localhost:3030/jsonstore/artists`;

function getLimitedArtists(artists) {
    const limit = 8;
    return artists.slice(0, limit);
}

export default function Artists() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(artists_URL);
            const results = await response.json();
            const data = Object.values(results);
            setArtists(data);
        })();
    }, []);

    return (
        <>
            <section className=" bg-black">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6 text-white">Artists</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Artist Card */}
                        {artists.length > 0 ? (
                            getLimitedArtists(artists).map((artist) => (
                                <ArtistCard key={artist._id} {...artist} />
                            ))
                        ) : (
                            <div className="content-center">
                                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
                                    No artists found.
                                </h3>
                            </div>
                        )}
                    </div>
                    <div className="mt-8 text-center p-10">
                        <Link to="/artists">
                            <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200">
                                View All
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

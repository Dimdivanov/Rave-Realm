import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                        {/*revisit */}

                        {artists.length > 0 ? (
                            getLimitedArtists(artists).map((artist) => (
                                <div
                                    key={artist._id}
                                    className="relative bg-transparent rounded-lg overflow-hidden shadow-lg border-[5px] border-gray-38"
                                >
                                    <Link to={`/artist/details/${artist._id}`}>
                                        <img
                                            src={artist.imageUrl}
                                            alt={artist.name}
                                            className="w-full h-40 object-cover object-center"
                                        />
                                    </Link>
                                    <div className="absolute bottom-0 w-full p-2 bg-transparent">
                                        <h2 className="text-center text-lg font-semibold text-white">
                                            {artist.name}
                                        </h2>
                                    </div>
                                </div>
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

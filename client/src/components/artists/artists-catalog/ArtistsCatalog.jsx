import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const artists_URL = `http://localhost:3030/jsonstore/artists`;

export default function ArtistsCatalog() {
    const [artists, setArtists] = useState([]);
    const controller = new AbortController();
    const signal = controller.signal;
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(artists_URL, { signal });
                const results = await response.json();
                const data = Object.values(results);
                setArtists(data);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.error('Fetch error:', error);
                }
            }
        })();
        return () => {
            controller.abort();
        };
    }, []);

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
                            <div className="text-center" key={artist._id}>
                                <Link to={`/artist/details/${artist._id}`}>
                                    <div className="rounded border-4 border-gray-500 overflow-hidden mb-4 h-48">
                                        <img
                                            src={artist.imageUrl}
                                            alt={artist.name}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </Link>
                                <h2 className="text-xl font-bold">{artist.name}</h2>
                                <p className="text-gray-400">
                                    {artist.appearanceDate} - {artist.stage}
                                </p>
                                <button className="bg-purple-700 px-4 py-2 rounded mt-2">
                                    Add to My Lineup
                                </button>
                            </div>
                        ))}

                        {/* Repeat similar structure for each artist */}
                    </div>
                </div>
            </section>
        </>
    );
}

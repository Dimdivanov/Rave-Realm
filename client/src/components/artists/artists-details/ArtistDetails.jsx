import { useParams, useNavigate } from 'react-router-dom';
import { useGetOneArtists } from '../../../hooks/useArtists';

export default function ArtistDetails() {
    const { artistId } = useParams();
    const navigate = useNavigate();

    const [artistDetails] = useGetOneArtists(artistId);

    return (
        <>
            <div className="bg-gradient-to-b from-purple-800 to-black text-white min-h-screen p-8 flex items-center justify-center">
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => navigate('/artists')}
                        className="mb-4 text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-10 h-10 rounded-full hover:bg-purple-500 hover:bg-opacity-50"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <h1 className="text-4xl font-bold mb-12 text-center">
                        {artistDetails.artistName}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-full h-72">
                                <img
                                    src={artistDetails.imageUrl}
                                    alt={artistDetails.artistName}
                                    className="rounded-lg mb-4 w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex justify-between items-center mb-4 w-full">
                                <span>TO BE ANNOUNCED</span>
                                <span className="text-gray-400">
                                    {artistDetails.appearanceDate}
                                </span>
                            </div>
                            <div className="flex items-center mb-4 w-full">
                                <span className="text-yellow-500 mr-2">
                                    {artistDetails.stage}
                                </span>
                                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg ml-40">
                                    Add to My Lineup
                                </button>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Biography:</h2>
                            <p>{artistDetails.biography}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { useGetOneArtists } from '../../../hooks/useArtists';
import ModalRemove from '../../modal/ModalRemove';
import artistAPI from '../../../api/artists-api';

export default function ArtistDetails() {
    const [showModalRemove, setShowModalRemove] = useState(false);

    const { artistId } = useParams();
    const navigate = useNavigate();
    const [artistDetails] = useGetOneArtists(artistId);

    const { userId } = useContext(AuthContext);
    const isOwner = userId === artistDetails._ownerId;

    const artistDelClickHandler = () => {
        setShowModalRemove(true);
    };

    const onDeleteClickHandle = async () => {
        setShowModalRemove(false);
        try {
            await artistAPI.remove(artistId);
            navigate('/artists');
        } catch (err) {
            console.log(err.message);
        }
    };

    const modalRemoveCloseHandler = () => {
        setShowModalRemove(false);
    };

    return (
        <>
            {showModalRemove && (
                <ModalRemove
                    onClose={modalRemoveCloseHandler}
                    onDeleteClick={onDeleteClickHandle}
                />
            )}
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
                            {isOwner ? (
                                <div className="mt-6 flex space-x-4">
                                    <Link to={`/artist/edit/${artistId}`}>
                                        <button className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg shadow-md hover:bg-yellow-400 transition duration-300">
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={artistDelClickHandler}
                                        className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-400 transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ) : (
                                ''
                            )}
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

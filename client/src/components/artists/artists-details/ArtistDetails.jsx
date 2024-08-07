import { useContext, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { useGetOneArtists } from '../../../hooks/useArtists';
import ModalRemove from '../../modal/ModalRemove';
import artistAPI from '../../../api/artists-api';
import { useCreateAddToLine } from '../../../hooks/useLineup';

export default function ArtistDetails() {
    const [showModalRemove, setShowModalRemove] = useState(false);

    const { artistId } = useParams();
    const navigate = useNavigate();
    const [artistDetails] = useGetOneArtists(artistId);

    const { userId, email } = useContext(AuthContext);
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

    /* Creating add to line up */
    const createAddToLine = useCreateAddToLine();
    
    const onClickAddToLineHandler = () => {
        createAddToLine(artistId, email);
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
                        className="absolute top-4 left-4 text-white"
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
                            <div className="w-full h-72 rounded border-4 border-gray-500 overflow-hidden mb-4">
                                <img
                                    src={artistDetails.imageUrl}
                                    alt={artistDetails.artistName}
                                    className="w-full h-full object-cover"
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
                                {!isOwner && (
                                    <button
                                        onClick={onClickAddToLineHandler}
                                        className="bg-teal-500 text-white px-4 py-2 rounded-lg ml-48 hover:bg-teal-600 transition-colors"
                                    >
                                        Add to My Lineup
                                    </button>
                                )}
                            </div>
                            {isOwner && (
                                <div className="mt-6 flex space-x-4">
                                    <Link to={`/artist/edit/${artistId}`}>
                                        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 px-4 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 transition-colors">
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={artistDelClickHandler}
                                        className="bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-lg shadow-md hover:from-red-600 hover:to-red-800 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </div>
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

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from '../../../../hooks/useForm';
import { useGetOneArtists } from '../../../../hooks/useArtists';
import artistAPI from '../../../../api/artists-api';

const initialValues = {
    artistName: '',
    imageUrl: '',
    biography: '',
    appearanceDate: '',
    stage: '',
};

export default function ArtistEdit() {
    const navigate = useNavigate();
    const { artistId } = useParams();
    const { values, changeHandler, submitHandler, setValues } = useForm(
        initialValues,
        async (updatedValues) => {
            try {
                await artistAPI.update(artistId, updatedValues);
                navigate(`/artist/details/${artistId}`);
            } catch (err) {
                console.error('Failed to update artist:', err.message);
            }
        }
    );

    const [artistDetails] = useGetOneArtists(artistId);
    if (!artistDetails) {
        return navigate('/*');
    }
    useEffect(() => {
        if (artistDetails) {
            setValues(artistDetails);
        }
    }, [artistDetails, setValues]);

    return (
        <section
            id="edit-artist"
            className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-8"
        >
            <div className="w-full max-w-xl mx-auto p-4 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">
                    Edit Artist
                </h2>
                <form onSubmit={submitHandler} className="space-y-4">
                    <div className="space-y-1">
                        <label
                            htmlFor="artist-name"
                            className="text-white text-sm font-medium"
                        >
                            Artist Name
                        </label>
                        <input
                            type="text"
                            name="artistName"
                            id="artist-name"
                            placeholder="Artist Name"
                            value={values.artistName || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="space-y-1">
                        <label
                            htmlFor="image-url"
                            className="text-white text-sm font-medium"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="imageUrl"
                            id="image-url"
                            placeholder="Image URL"
                            value={values.imageUrl || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="space-y-1">
                        <label
                            htmlFor="biography"
                            className="text-white text-sm font-medium"
                        >
                            Biography
                        </label>
                        <textarea
                            id="biography"
                            name="biography"
                            placeholder="Biography"
                            rows={4}
                            value={values.biography || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="space-y-1">
                        <label
                            htmlFor="appearance-date"
                            className="text-white text-sm font-medium"
                        >
                            Performance Date
                        </label>
                        <input
                            type="text"
                            name="appearanceDate"
                            id="appearance-date"
                            placeholder="Performance Date"
                            value={values.appearanceDate || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="stage" className="text-white text-sm font-medium">
                            Stage
                        </label>
                        <input
                            type="text"
                            name="stage"
                            id="stage"
                            placeholder="Stage"
                            value={values.stage || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={() => navigate('/artists')}
                            className="flex items-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 px-4 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 transition-colors"
                        >
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

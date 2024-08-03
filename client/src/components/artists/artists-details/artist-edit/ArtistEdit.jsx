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

    // Fetch artist data
    const [artistDetails] = useGetOneArtists(artistId);

    useEffect(() => {
        if (artistDetails) {
            setValues(artistDetails); // Populate form with existing artist data
        }
    }, [artistDetails, setValues]);

    return (
        <section
            id="edit-artist"
            className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
        >
            <div className="w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                    Edit Artist
                </h2>
                <form onSubmit={submitHandler} className="space-y-4">
                    <input
                        type="text"
                        name="artistName"
                        id="artist-name"
                        placeholder="Artist Name"
                        value={values.artistName || ''} // Ensure a default empty string
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="image-url"
                        placeholder="Image URL"
                        value={values.imageUrl || ''} // Ensure a default empty string
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <textarea
                        id="biography"
                        name="biography"
                        placeholder="Biography"
                        rows={5}
                        value={values.biography || ''} // Ensure a default empty string
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="text"
                        name="appearanceDate"
                        id="appearance-date"
                        placeholder="Performance Date"
                        value={values.appearanceDate || ''} // Ensure a default empty string
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="text"
                        name="stage"
                        id="stage"
                        placeholder="Stage"
                        value={values.stage || ''} // Ensure a default empty string
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Edit Artist
                    </button>
                </form>
            </div>
        </section>
    );
}

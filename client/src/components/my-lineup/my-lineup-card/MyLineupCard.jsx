import { Link } from 'react-router-dom';
import { useRemoveAddToLine } from '../../../hooks/useLineup';

export default function MyLineupCard({ _id, imageUrl, artistName, artistId }) {

    const removeHandler = () => {
        try {
            useRemoveAddToLine(artistId);
        } catch (error) {
            console.error('Error removing artist:', error);
        }
    };

    return (
        <>
            <div className="text-center">
                <Link to={`/artist/details/${_id}`}>
                    <div className="rounded border-4 border-gray-500 overflow-hidden mb-4 h-48">
                        <img
                            src={imageUrl}
                            alt={artistName}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </Link>
                <h2 className="text-white text-xl font-bold">{artistName}</h2>
                <button
                    onClick={removeHandler} // Call the onRemove function with the card's id
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                    Remove
                </button>
            </div>
        </>
    );
}

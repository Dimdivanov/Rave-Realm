import { Link } from 'react-router-dom';

export default function ArtistCard({ _id, imageUrl, name }) {
    return (
        <>
            <div className="relative bg-transparent rounded-lg overflow-hidden shadow-lg border-[5px] border-gray-38">
                <Link to={`/artist/details/${_id}`}>
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-40 object-cover object-center"
                    />
                </Link>
                <div className="absolute bottom-0 w-full p-2 bg-transparent">
                    <h2 className="text-center text-lg font-semibold text-white">
                        {name}
                    </h2>
                </div>
            </div>
        </>
    );
}

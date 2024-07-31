import { Link } from 'react-router-dom';

export default function ArtistCatalogCard({
    _id,
    imageUrl,
    name,
    stage,
    appearanceDate,
}) {
    
    return (
        <>
            <div className="text-center">
                <Link to={`/artist/details/${_id}`}>
                    <div className="rounded border-4 border-gray-500 overflow-hidden mb-4 h-48">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </Link>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-400">
                    {appearanceDate} - {stage}
                </p>
                <button className="bg-purple-700 px-4 py-2 rounded mt-2">
                    Add to My Lineup
                </button>
            </div>
        </>
    );
}
import { Link } from 'react-router-dom';

export default function ArtistCatalogCard({
    _id,
    imageUrl,
    artistName,
    stage,
    appearanceDate,
    _ownerId,
    userId,
}) {
    const isOwner = userId === _ownerId;

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
                <p className="text-gray-400">
                    {appearanceDate} - {stage}
                </p>
                {isOwner ? (
                    ''
                ) : (
                    <button className="bg-yellow-500 px-4 py-2 rounded-full mt-2">
                        Add to My Lineup
                    </button>
                )}
            </div>
        </>
    );
}

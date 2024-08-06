import { Link } from 'react-router-dom';

export default function ArtistCatalogCard({
    _id,
    imageUrl,
    artistName,
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
                            alt={artistName}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </Link>
                <h2 className="text-white text-xl font-bold">{artistName}</h2>
                <p className="text-gray-400">
                    {appearanceDate} - {stage}
                </p>
            </div>
        </>
    );
}

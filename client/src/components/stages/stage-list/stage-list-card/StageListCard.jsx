import { Link } from 'react-router-dom';

export default function StageListCard({
    _id,
    stageImageUrl,
    stageName,
    description,
    category,
}) {
    return (
        <>
            <div className="border-4 border-gray-700 rounded-lg overflow-hidden shadow-lg">
                <Link to={`/stage/details/${_id}`}>
                    <img
                        src={stageImageUrl}
                        alt={stageName}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{description}</h2>
                        <p className="text-sm text-gray-400">{category}</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

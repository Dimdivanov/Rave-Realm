import { Link } from 'react-router-dom';

export default function StageListCard({
    _id,
    stageImageUrl,
    stageName,
    description,
    category,
}) {
    return (
        <div className="border-4 border-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
            <Link to={`/stage/details/${_id}`} className="flex flex-col h-full">
                <img
                    src={stageImageUrl}
                    alt={stageName}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6 bg-gradient-to-t from-gray-800 to-transparent flex-grow">
                    <h2 className="text-3xl font-bold text-center text-white mb-2 relative line-clamp-1">
                        <span className="absolute inset-0 bg-black bg-opacity-40 rounded-md blur-md"></span>
                        <span className="relative">{stageName}</span>
                    </h2>
                    <p className="text-lg text-gray-300 text-center mb-2 line-clamp-5">
                        {description}
                    </p>
                    <p className="text-sm text-gray-400 text-center line-clamp-1">{category}</p>
                </div>
            </Link>
        </div>
    );
}

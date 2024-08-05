import { Link } from 'react-router-dom';

export default function StageDetailsContent({
    stageDetails,
    stageId,
    isOwner,
    stageDelClickHandler,
}) {
    return (
        <div className="mt-16 container max-w-5xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-white mb-4">{stageDetails.stageName}</h2>
            </div>
            <div className="image-container relative overflow-hidden rounded-lg shadow-lg mb-6 w-full max-w-lg mx-auto border-2 border-gray-400">
                <img
                    src={stageDetails.stageImageUrl}
                    alt={stageDetails.stageName}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="description text-white text-center mb-6">
                <p className="text-lg mb-4">{stageDetails.description}</p>
            </div>
            <div className="flex justify-center space-x-4 mb-6">
                <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded-md shadow-md hover:from-purple-600 hover:to-purple-800 transition-colors">
                    Like
                </button>
                {isOwner && (
                    <>
                        <Link to={`/stage/edit/${stageId}`}>
                            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 px-4 rounded-md shadow-md hover:from-yellow-500 hover:to-yellow-700 transition-colors">
                                Edit
                            </button>
                        </Link>
                        <button
                            onClick={stageDelClickHandler}
                            className="bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-md shadow-md hover:from-red-600 hover:to-red-800 transition-colors"
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

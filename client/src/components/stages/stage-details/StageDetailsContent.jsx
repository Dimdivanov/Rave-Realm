import { Link } from "react-router-dom";
export default function StageDetailsContent({
    stageDetails,
    stageId,
    isOwner,
    stageDelClickHandler,
}) {
    return (
        <div className="container max-w-5xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
            <div className="image-container relative overflow-hidden rounded-lg shadow-lg mb-6 w-full max-w-lg mx-auto border-2 border-gray-400">
                {' '}
                {/* Added max-w-lg for size and border for gray frame */}
                <img
                    src={stageDetails.stageImageUrl}
                    alt={stageDetails.stageName}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="description text-white text-center">
                <h2 className="text-3xl font-semibold mb-4">{stageDetails.stageName}</h2>
                <p className="text-lg mb-4">{stageDetails.description}</p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                    Learn More
                </button>
                {isOwner ? (
                    <div className="flex justify-center space-x-4">
                        <Link to={`/stage/edit/${stageId}`}>
                            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md shadow-md hover:bg-yellow-400 transition-colors">
                                Edit
                            </button>
                        </Link>
                        <button
                            onClick={stageDelClickHandler}
                            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-400 transition-colors"
                        >
                            Delete
                        </button>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

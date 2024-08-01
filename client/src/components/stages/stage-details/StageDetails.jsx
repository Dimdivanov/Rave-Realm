import { useParams } from 'react-router-dom';
import { useGetOneStage } from '../../../hooks/useStages';

export default function StageDetails() {
    const { stageId } = useParams();
    const [stageDetails] = useGetOneStage(stageId);
    
    return (
        <>
             <section
                id="stage-info"
                className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-20" // Adjusted py-10 to py-20 for more top padding
            >
                <div className="container max-w-5xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                    <div className="image-container relative overflow-hidden rounded-lg shadow-lg mb-6 w-full max-w-lg mx-auto border-2 border-gray-400"> {/* Added max-w-lg for size and border for gray frame */}
                        <img
                            src={stageDetails.stageImageUrl}
                            alt={stageDetails.stageName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="description text-white text-center">
                        <h2 className="text-3xl font-semibold mb-4">{stageDetails.stageName}</h2>
                        <p className="text-lg mb-4">
                            {stageDetails.description}
                        </p>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

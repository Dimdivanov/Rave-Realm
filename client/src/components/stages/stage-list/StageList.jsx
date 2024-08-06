import StageListCard from './stage-list-card/StageListCard';
import { useGetAllStages } from '../../../hooks/useStages';

export default function StageList() {
    const stages = useGetAllStages();

    return (
        <div className="relative bg-black bg-gradient-to-b from-purple-800 to-rgb-400 min-h-screen">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8 mt-24">
                    <h2 className="text-4xl text-white font-bold mb-6">
                        Stages List
                    </h2>
                </div>
            </div>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Stage List Card Component */}
                    {stages.map((stage) => (
                        <StageListCard key={stage._id} {...stage} />
                    ))}
                </div>
            </section>
        </div>
    );
}

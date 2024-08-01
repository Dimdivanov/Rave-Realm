import StageListCard from './stage-list-card/StageListCard';

import { useGetAllStages } from '../../../hooks/useStages';

export default function StageList() {
    const stages = useGetAllStages();
    console.log(stages);
    return (
        <>
            <>
                <section className="w-full flex xl:flex-row flex-col justify-center min-h-[80vh] gap-10 bg-black relative bg-gradient-to-b from-purple-800 to-rgb-400">
                    <div className="container mx-auto px-4 py-8 text-white pt-32">
                        <div className="text-3xl font-bold mb-6">
                            <h2 className="text-4xl font-bold mb-6 text-center">
                                Stages List
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto ">
                            {stages.map((stage) => (
                                <StageListCard {...stage} />
                            ))}
                        </div>
                    </div>
                </section>
            </>
        </>
    );
}

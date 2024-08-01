import { useState } from 'react';
import { useGetAllStages } from '../../hooks/useStages';
import StageCard from './stage-card/StageCard';

export default function Stages() {
    const stages = useGetAllStages([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Number of items per slide and calculate total slides
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(stages.length / itemsPerSlide);

    const nextStage = () => {
        setCurrentIndex((currentIndex + 1) % totalSlides);
    };

    const prevStage = () => {
        setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="padding bg-default-black space-x-60">
            {stages.length > 0 ? (
                <div className="relative w-full h-64 overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100 / itemsPerSlide}%)`, width: `${totalSlides * 100}%` }}
                    >
                        {stages.map((stage) => (
                            <div key={stage._id} className="flex-none w-full md:w-1/3 h-64">
                                <StageCard {...stage} />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={prevStage}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1"
                    >
                        Prev
                    </button>
                    <button
                        onClick={nextStage}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1"
                    >
                        Next
                    </button>
                </div>
            ) : (
                <div className="w-full h-64 flex justify-center items-center">
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
                        No Stages found.
                    </h3>
                </div>
            )}
        </section>
    );
}

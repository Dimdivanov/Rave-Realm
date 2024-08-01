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
        <section className="padding bg-default-black py-8 px-4">
            <div className="relative w-full h-64 overflow-hidden">
                {/* Carousel Wrapper */}
                <div className="relative flex transition-transform duration-500 ease-in-out">
                    {/* Carousel Items */}
                    <div className="flex">
                        {/* Example items. Replace these with your data as needed */}
                        <div className="flex-none w-full md:w-1/3 h-64 px-4 py-2">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                                <img
                                    src="/src/assets/images/stageBanner/echoValley.jpg"
                                    className="w-full h-auto object-center"
                                    alt="Stage 1"
                                />
                            </div>
                        </div>
                        {/* Add more items as needed */}
                        {/* Example items. Replace these with your data as needed */}
                        <div className="flex-none w-full md:w-1/3 h-64 px-4 py-2">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                                <img
                                    src="/src/assets/images/stageBanner/echoValley.jpg"
                                    className="w-full h-auto object-center"
                                    alt="Stage 1"
                                />
                            </div>
                        </div>
                        {/* Add more items as needed */}
                    </div>
                </div>
                {/* Navigation Controls */}
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button className="w-3 h-3 rounded-full bg-gray-500" />
                <button className="w-3 h-3 rounded-full bg-gray-500" />
                <button className="w-3 h-3 rounded-full bg-gray-500" />
                {/* Add more indicators as needed */}
            </div>
        </section>
    );
}

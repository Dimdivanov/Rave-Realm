import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 3;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="relative bg-black py-8 px-4">
            <div className="relative w-full h-64 overflow-hidden">
                {/* Carousel Wrapper */}
                <div
                    className="relative flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {/* Carousel Items */}
                    {slides.map((slide) => (
                        <div
                            key={slide._id}
                            className="flex-none w-full md:w-1/3 h-64 px-4 py-2"
                        >
                            <Link to={`/stage/details/${slide._id}`}>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                                    <img
                                        src={slide.stageImageUrl}
                                        className="w-full h-auto object-cover"
                                        alt={slide.stageName}
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                {/* Navigation Controls */}
                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
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
                <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
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
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-gray-800' : 'bg-gray-500'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
}

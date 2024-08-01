import React, { useState } from 'react';

export default function Stages() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { id: 1, content: 'Slide 1', bgColor: 'bg-red-500' },
        { id: 2, content: 'Slide 2', bgColor: 'bg-green-500' },
        { id: 3, content: 'Slide 3', bgColor: 'bg-blue-500' },
    ];

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
    };
    return (
        <>
            
                <section className="padding  bg-default-black space-x-60">
                    <div className="relative w-full h-64 overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {slides.map((slide) => (
                                <div
                                    key={slide.id}
                                    className={`flex-none w-full h-64 flex justify-center items-center ${slide.bgColor} text-white text-xl font-bold`}
                                >
                                    {slide.content}
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1"
                        >
                            Prev
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1"
                        >
                            Next
                        </button>
                    </div>
                </section>
            
        </>
    );
}

import { Link } from 'react-router-dom';

export default function FrequentQuestions() {
    return (
        <>
            <section
                id="faq"
                className="relative bg-black bg-gradient-to-b from-purple-800 to-rgb-400 min-h-screen pt-20"
            >
                <div className="relative px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-64">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white">
                                Frequently Asked Questions
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Find answers to some of the most common questions we
                                receive.
                            </p>
                        </div>
                        <div className="mt-10">
                            <div className="space-y-6">
                                <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-semibold text-white">
                                        What is the event about?
                                    </h2>
                                    <p className="mt-2 text-lg text-gray-300">
                                        Our event is a blend of music and magic designed
                                        to create unforgettable experiences. Join us for a
                                        night of incredible performances and memories.
                                    </p>
                                </div>
                                <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-semibold text-white">
                                        How can I get tickets?
                                    </h2>
                                    <p className="mt-2 text-lg text-gray-300">
                                        Tickets can be purchased through our website.
                                        Click on the "Get Your Tickets" button to secure
                                        your spot.
                                    </p>
                                </div>
                                <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-semibold text-white">
                                        Can I participate as a creator?
                                    </h2>
                                    <p className="mt-2 text-lg text-gray-300">
                                        Absolutely! If you're interested in contributing
                                        to the event as a creator, click on the "Be a
                                        Creator" button for more details.
                                    </p>
                                </div>
                                {/* Add more FAQ items as needed */}
                            </div>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-x-6 relative">
                            <Link
                                to="/get-tickets"
                                className="relative z-10 rounded-full bg-gradient-to-r from-[rgb(116,47,255)] to-[rgb(230,35,196)] px-6 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-200 hover:from-[rgb(100,35,255)] hover:to-[rgb(220,35,196)] hover:scale-105 hover:shadow-xl border-2 border-white"
                            >
                                Get Your Tickets
                            </Link>
                            <Link
                                to="/create-stage"
                                className="absolute z-10 rounded-full bg-transparent border-2 border-[rgb(116,47,255)] px-4 py-2 text-lg font-bold text-white shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg opacity-90"
                                style={{ top: '6rem' }}
                            >
                                Be a Creator
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

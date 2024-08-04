import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <>
            <section
                id="hero"
                className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 bg-black relative bg-gradient-to-b from-purple-800 to-rgb-400 sm:min-h-[50vh] md:min-h-[60vh]"
            >
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-64">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Tickets For Fun, Memories For A Lifetime.
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-white-400">
                                Join us for an extraordinary adventure where music meets
                                magic. Secure your ticket today and create memories that
                                will last forever.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/get-tickets"
                                    className="relative rounded-full bg-gradient-to-r from-[rgb(116,47,255)] to-[rgb(230,35,196)] px-6 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:from-[rgb(100,35,255)] hover:to-[rgb(220,35,196)] hover:scale-105 hover:shadow-xl border-2 border-white"
                                >
                                    Get Your Tickets
                                    <span className="absolute inset-0 rounded-full border-2 border-[rgb(116,47,255)] opacity-50"></span>
                                </Link>
                                <Link
                                    to="/create-stage"
                                    className="relative rounded-full bg-gradient-to-r from-[rgb(116,47,255)] to-[rgb(230,35,196)] px-6 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:from-[rgb(100,35,255)] hover:to-[rgb(220,35,196)] hover:scale-105 hover:shadow-xl border-2 border-white"
                                >
                                    Be a Creator
                                    <span className="absolute inset-0 rounded-full border-2 border-[rgb(116,47,255)] opacity-50"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

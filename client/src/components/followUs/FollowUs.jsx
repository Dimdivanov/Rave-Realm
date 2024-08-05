import React from 'react';

export default function FollowUs() {
    return (
        <section className="padding-x py-10 bg-black">
            <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                    <div className="text-white text-6xl">
                            <img
                                src="/src/assets/icons/instagramLogo.png"
                                alt="instaLogo"
                                className="w-32 h-32 rounded-lg shadow-lg object-cover"
                            />
                    </div>
                    <div>
                        <p className="text-xl text-white">Follow us on Instagram</p>
                        <p className="text-2xl font-bold text-white">
                            @RaveRealmTickets
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl mb-4 text-white">Our Partners</h2>
                    <h3 className="text-2xl font-bold mb-6 text-white">Rave Realm</h3>
                    <div className="flex flex-wrap gap-6 mb-4">
                        <div className="relative flex flex-col items-center group hover:scale-105 transform transition-transform duration-300">
                            <img
                                src="/src/assets/images/sponsorsBanner/sponsor1.jpg"
                                alt="Sumiom"
                                className="w-32 h-32 rounded-lg shadow-lg object-cover"
                            />
                            <p className="text-sm text-white mt-2">Sumiom</p>
                        </div>
                        <div className="relative flex flex-col items-center group hover:scale-105 transform transition-transform duration-300">
                            <img
                                src="/src/assets/images/sponsorsBanner/sponsor2.jpg"
                                alt="Eedm"
                                className="w-32 h-32 rounded-lg shadow-lg object-cover"
                            />
                            <p className="text-sm text-white mt-2">Eedm</p>
                        </div>
                        <div className="relative flex flex-col items-center group hover:scale-105 transform transition-transform duration-300">
                            <img
                                src="/src/assets/images/sponsorsBanner/sponsor3.jpg"
                                alt="Sept Fest"
                                className="w-32 h-32 rounded-lg shadow-lg object-cover"
                            />
                            <p className="text-sm text-white mt-2">Sept Fest</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}


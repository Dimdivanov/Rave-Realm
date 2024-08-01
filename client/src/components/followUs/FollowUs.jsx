export default function FollowUs() {
    return (
        <>
            <section className="padding-x py-10  bg-black">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center space-x-4">
                        <div className="text-white text-6xl"></div>
                        <div>
                            <p className="text-xl text-white">Follow us on Instagram</p>
                            <p className="text-2xl font-bold text-white">
                                @RaveRealmTickets
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl mb-4 text-white">Our Partners</h2>
                        <h3 className="text-2xl font-bold mb-4 text-white">Rave Realm</h3>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src="/src/assets/images/sponsors/sponsor1.jpg"
                                    alt="image1"
                                    className="w-24 h-24 rounded-lg mb-2"
                                />
                                <p className="text-sm text-white">Sumiom</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="/src/assets/images/sponsors/sponsor2.jpg"
                                    alt="image2"
                                    className="w-24 h-24 rounded-lg mb-2"
                                />
                                <p className="text-sm text-white">Eedm</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="/src/assets/images/sponsors/sponsor3.jpg"
                                    alt="image3"
                                    className="w-24 h-24 rounded-lg mb-2"
                                />
                                <p className="text-sm text-white">Sept Fest</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition"></button>
                            <div className="flex-1 bg-gray-800 h-1 rounded-lg overflow-hidden">
                                <div
                                    className="bg-yellow-500 h-full"
                                    style={{ width: '33%' }}
                                ></div>
                            </div>
                            <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition"></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

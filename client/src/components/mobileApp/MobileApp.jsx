import { Link } from 'react-router-dom';

export default function MobileApp() {
    return (
        <>
            <section className="padding bg-mobileSection relative">
                {/* Left Section */}
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between mt-16 lg:mt-0 relative">
                    {/* Background Image */}
                    <div className="lg:inset-0 lg:w-1/2 w-full h-64 lg:h-auto lg:absolute lg:left-0 lg:top-0 lg:flex lg:items-center lg:justify-center z-0 mb-8 lg:mb-0">
                        <img
                            src="src/assets/images/decorations/iphoneMockup.png"
                            alt="Background Image"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 text-left mb-8 lg:mb-0 z-10 lg:w-1/2 lg:ml-8 relative">
                        <div className="mb-8 lg:-ml-24">
                            <h2 className="text-2xl font-bold">
                                Manage your tickets with our app
                            </h2>
                        </div>
                        <div className="mb-8 lg:-ml-24">
                            <p>Get it on:</p>
                            <div className="flex space-x-4 mt-4">
                                <button className="bg-black text-white px-4 py-2 rounded">
                                    App Store
                                </button>
                                <button className="bg-black text-white px-4 py-2 rounded">
                                    Google Store
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 rounded-lg lg:w-1/2 lg:ml-8 z-10">
                        <img
                            src="src/assets/icons/logo.ico"
                            alt="Icon"
                            className="w-24 mb-2"
                        />
                        <h2 className="text-3xl font-bold text-center mb-4">
                            Are You Ready to Make Memories?
                        </h2>
                        <Link to="/get-tickets">
                            <button className="bg-black text-white px-4 py-2 rounded">
                                Get Your Tickets
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

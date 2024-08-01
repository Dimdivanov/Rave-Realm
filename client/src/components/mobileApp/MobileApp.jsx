import { Link } from 'react-router-dom';
export default function MobileApp() {
    return (
        <>
            <section className="padding bg-mobileSection">
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between mt-16 lg:mt-0">
                    {/* Left Section */}
                    <div className="flex-1 text-left mb-8 lg:mb-0 z-20">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold">
                                Manage your tickets with our app
                            </h2>
                        </div>
                        <div className="mb-8">
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
                    <div className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 rounded-lg">
                        <img
                            src="src/assets/images/logo.ico"
                            alt="Icon"
                            className="w-16 h-16 mb-4"
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

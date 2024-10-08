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
                            src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/images%2Fdecorations%2FiphoneMockup.png?alt=media&token=1b90cf1b-bc4f-4e3d-915a-87c18c6691ce"
                            alt="Background Image2"
                            className="object-cover scale-95"
                        />
                    </div>

                    <div className="flex-1 text-left mb-8 lg:mb-0 z-10 lg:w-1/2 lg:ml-8 relative">
                        <div className="mb-8 lg:-ml-24">
                            <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                                Manage your tickets with our app
                            </h2>
                        </div>
                        <div className="mb-8 lg:-ml-24">
                            <p className="font-bold">Get it on:</p>
                            <div className="flex space-x-4 mt-4">
                                <Link to={'https://www.apple.com/app-store/'}>
                                    <button className="bg-black text-white font-bold px-4 py-2 rounded">
                                        App Store
                                    </button>
                                </Link>
                                <Link to={'https://play.google.com/store/games?hl=en'}>
                                    <button className="bg-black text-white font-bold px-4 py-2 rounded">
                                        Google Store
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 rounded-lg lg:w-1/2 lg:ml-8 z-10">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/icons%2Flogo.ico?alt=media&token=da4060b7-6a89-4625-8995-5e07384e4a2a"
                            alt="Icon"
                            className="w-24 mb-2"
                        />
                        <h2 className="text-3xl font-bold text-center mb-4">
                            Are You Ready to Make Memories?
                        </h2>
                        <Link to="/get-tickets">
                            <button className="bg-black text-white px-4 py-2 rounded font-bold">
                                Get Your Tickets
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

import { Link } from 'react-router-dom';

export default function SettingsMenu() {
    return (
        <>
            <>
                {/* Create Nested routes */}
                {/* re-use navigation panel*/}

                <div className="bg-gradient-to-b from-purple-800 to-black text-white min-h-screen flex justify-center items-center">
                    {/* Main Container */}
                    <div className="w-full max-w-screen-lg p-4 md:flex md:space-x-4">
                        {/* Sidebar */}
                        <div className="w-full md:w-1/4 p-4 space-y-4 bg-black bg-opacity-25 rounded-lg">
                            <div className="flex items-center">
                                <button className="text-white text-lg">← Back</button>
                                <div className="ml-4 text-xl">About Festival</div>
                            </div>
                            <nav className="mt-8">
                                <ul className="space-y-4">
                                    <li>
                                        <a href="/news" className="hover:underline">
                                            News
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/map" className="hover:underline">
                                            Map
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className="hover:underline">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/get-tickets"
                                            className="hover:underline"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/get-tickets"
                                            className="hover:underline"
                                        >
                                            Privacy & Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/get-tickets"
                                            className="hover:underline"
                                        >
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/get-tickets"
                                            className="hover:underline"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            to="/account-settings-test"
                                            className="hover:underline"
                                        >
                                            Account Settings Test
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/logout" className="hover:underline">
                                            Logout Test
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* Main Content */}
                        <div className="w-full md:w-2/3 lg:w-1/2 p-4">
                            <div className="relative">
                                <img
                                    src="/src/assets/images/festivalBanner.jpg"
                                    alt="Festival Banner"
                                    className="w-full h-96 object-contain rounded-lg"
                                />
                            </div>
                            <div className="mt-8">
                                <p className="text-lg">
                                    In the heart of Transylvania, a realm of music and
                                    magic comes alive, where beats transform into
                                    symphonies and nights are painted with vibrant hues of
                                    melody...
                                </p>
                                <p className="mt-4 text-lg">
                                    Here, the stages are transformed into portals of sonic
                                    wonder, each one a gateway to a unique auditory
                                    journey...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

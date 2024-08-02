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
                            <div className="text-xl text-center">Micro Menu</div>
                            <div className="flex items-center"></div>
                            <nav className="mt-8">
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/news" className="hover:underline">
                                            News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/map" className="hover:underline">
                                            Map
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="hover:underline">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/get-tickets"
                                            className="hover:underline"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/privacy-policy"
                                            className="hover:underline"
                                        >
                                            Privacy & Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/terms-conditions"
                                            className="hover:underline"
                                        >
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contact-us"
                                            className="hover:underline"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/stage/details/"
                                            className="hover:underline"
                                        >
                                            Account Settings Test
                                        </Link>
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
                        {/* Main Content render all content here*/}
                        <div className="w-full md:w-2/3 lg:w-1/2 p-4">
                            <div className="relative">
                                <img
                                    src="/src/assets/images/decorations/festivalBanner.jpg"
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

import { Link } from 'react-router-dom';

export default function SiteMapMenu() {
    return (
        <>
            {/* Sidebar */}
            <div className="w-full md:w-1/4 p-4 space-y-4 bg-black bg-opacity-25 rounded-lg">
                <div className="text-xl"></div>
                <div className="flex items-center"></div>
                <nav className="mt-8">
                    <ul className="space-y-4">
                        <li>
                            <Link to="news" className="hover:underline">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to="map" className="hover:underline">
                                Map
                            </Link>
                        </li>
                        <li>
                            <Link to="about" className="hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="FAQ" className="hover:underline">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="privacy-policy" className="hover:underline">
                                Privacy & Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="terms-conditions" className="hover:underline">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="contact-us" className="hover:underline">
                                Contact Us
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
        </>
    );
}

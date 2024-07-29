import { loginRegisterLinks } from '../../constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="inset-x-0 top-0 z-50 fixed bg-black bg-opacity-98 ">
                <nav
                    className="flex items-center justify-between p-2 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <img
                                className="h-28 w-auto" // Adjusted logo size
                                src="src/assets/images/logo.ico"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
                        <Link
                            to="/"
                            className="text-lg font-semibold leading-6 text-white"
                        >
                            Home
                        </Link>
                        <Link
                            to="/get-tickets"
                            className="text-lg font-semibold leading-6 text-white"
                        >
                            Get Tickets
                        </Link>
                        <Link
                            to="/artists"
                            className="text-lg font-semibold leading-6 text-white"
                        >
                            Artists
                        </Link>
                        <Link
                            to="/stages-list"
                            className="text-lg font-semibold leading-6 text-white"
                        >
                            Stages
                        </Link>
                        <Link
                            to="/create-stage"
                            className="text-lg font-semibold leading-6 text-white"
                        >
                            Create Stage
                        </Link>
                        <Link
                            to="/create-artist"
                            className="text-lg font-semibold leading-6 text-white"
                        >
                            Add Artist
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <div className="flex space-x-4">
                            <Link key="testPage" to="/generalInfo" className="pt-2 px-4">
                                <img
                                    src="src/assets/icons/settingsIcon.ico"
                                    alt="My Bag"
                                    className="w-8 h-8 hover:scale-105 hover:shadow-lg transition-transform duration-200"
                                />
                            </Link>
                            <Link key="mybag" to="/my-bag" className="pt-2 px-4">
                                <img
                                    src="src/assets/icons/mybag.ico"
                                    alt="My Bag"
                                    className="w-8 h-8 hover:scale-105 hover:shadow-lg transition-transform duration-200"
                                />
                            </Link>
                            <Link
                                key="signup"
                                to={loginRegisterLinks[0].href}
                                className="border rounded-full px-6 py-4 shadow font-bold text-white w-32 h-12 text-center flex items-center justify-center flex-shrink-0 hover:scale-105 hover:shadow-lg transition-transform duration-200"
                            >
                                Sign Up
                            </Link>
                            <Link
                                key="login"
                                to={loginRegisterLinks[1].href}
                                className="bg-white border rounded-full px-6 py-4 shadow font-bold text-black w-32 h-12 text-center flex items-center justify-center flex-shrink-0 hover:scale-105 hover:shadow-lg transition-transform duration-200"
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>

                {isMenuOpen && (
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        <div
                            className="fixed inset-0 z-50 bg-black bg-opacity-25"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <div className="backdrop-blur-sm bg-opacity-15 absolute top-16 right-0 z-50 w-full max-w-sm bg-black p-6 ring-1 ring-gray-900/10 rounded-lg">
                            <div className="flex items-center justify-between">
                                <Link to="/" className="-m-1.5 p-1.5">
                                    <img
                                        className="h-20 w-auto" // Adjusted logo size for mobile menu
                                        src="src/assets/images/logo.ico"
                                        alt="Logo"
                                    />
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg
                                        className="h-6 w-6 hover:bg-gray-800"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6">
                                <div className="space-y-2">
                                    <Link
                                        to="/"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/get-tickets"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get Tickets
                                    </Link>
                                    <Link
                                        to="/artists"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Artists
                                    </Link>
                                    <Link
                                        to="/stages"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Stages
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

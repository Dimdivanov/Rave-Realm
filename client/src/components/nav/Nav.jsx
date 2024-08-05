import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { loginRegisterLinks } from '../../constants';

import logo from '../../assets/icons/logo.ico';
import myBag from '../../assets/icons/mybag.ico';
import profileIcon from '../../assets/icons/profileIcon.png';
import info from '../../assets/icons/info.png';

//rework this module separate into 2 more nav-center-menu and mobile-view-menu
export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <header className="inset-x-0 top-0 z-50 fixed bg-black bg-opacity-98 ">
                <nav
                    className="flex items-center justify-between p-2 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link to="/" className="relative -m-1.5 p-1.5 group">
                            <img
                                className="h-28 w-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-6 lg:px-6 lg:py-6">
                        <>
                            <Link
                                to="/"
                                className="text-xl font-semibold leading-5 text-white whitespace-nowrap"
                            >
                                Home
                            </Link>
                            <Link
                                to="/get-tickets"
                                className="text-xl font-semibold leading-5 text-white whitespace-nowrap"
                            >
                                Tickets
                            </Link>
                            <Link
                                to="/artists"
                                className="text-xl font-semibold leading-5 text-white whitespace-nowrap"
                            >
                                Artists
                            </Link>
                            <Link
                                to="/stages-list"
                                className="text-xl font-semibold leading-5 text-white whitespace-nowrap"
                            >
                                Stages
                            </Link>
                            {isAuthenticated && (
                                <>
                                    <Link
                                        to="/create-ticket"
                                        className="text-xl font-semibold leading-5 text-white whitespace-nowrap"
                                    >
                                        Create Tickets
                                    </Link>
                                    <Link
                                        to="/create-artist"
                                        className="text-xl font-semibold leading-5 text-white whitespace-nowrap"
                                    >
                                        Add Artist
                                    </Link>
                                    <Link
                                        to="/create-stage"
                                        className="text-xl font-semibold leading-5 text-white whitespace-nowrap"
                                    >
                                        Create Stage
                                    </Link>
                                </>
                            )}
                        </>
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end p-2">
                        <div className="flex space-x-4 p-2">
                            <Link
                                key="testPage"
                                to="/settings-menu"
                                className="w-15 pt-2 px-4 p-2"
                            >
                                <img
                                    src={info}
                                    alt="Settings-menu"
                                    className="w-8 h-8 hover:scale-105 hover:shadow-lg transition-transform duration-200"
                                />
                            </Link>
                            <Link key="mybag" to="/my-bag" className="w-15 pt-2 px-4">
                                <img
                                    src={myBag}
                                    alt="My Bag"
                                    className="w-8 h-8 hover:scale-105 hover:shadow-lg transition-transform duration-200"
                                />
                            </Link>
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        key="account-sttings-test"
                                        to="/account-settings-test"
                                        className="pt-2 px-4"
                                    >
                                        <img
                                            src={profileIcon}
                                            alt="My Profile"
                                            className="w-8 h-8 hover:scale-105 hover:shadow-lg transition-transform duration-200"
                                        />
                                    </Link>
                                </>
                            ) : (
                                <>
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
                                </>
                            )}
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
                                        src="src/assets/icons/logo.ico"
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
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/get-tickets"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get Tickets
                                    </Link>
                                    <Link
                                        to="/artists"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Artists
                                    </Link>
                                    <Link
                                        to="/stages-list"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Stages
                                    </Link>
                                    <Link
                                        to="/create-ticket"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Create Tickets
                                    </Link>
                                    <Link
                                        to="/create-artist"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Add Artist
                                    </Link>
                                    <Link
                                        to="/create-stage"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Create Stage
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

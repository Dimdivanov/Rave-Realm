import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { loginRegisterLinks } from '../../constants';

import logo from '../../assets/icons/logo.ico';
import profileIcon from '../../assets/icons/profileIcon.png';
import info from '../../assets/icons/info.png';
import HamburgerMenu from './hamburger-menu/HamburgerMenu';

import styles from './Nav.module.css';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated, email } = useContext(AuthContext);

    return (
        <>
            <header className="inset-x-0 top-0 z-50 fixed bg-black bg-opacity-98">
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
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/get-tickets"
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                            }
                        >
                            Tickets
                        </NavLink>
                        <NavLink
                            to="/artists"
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                            }
                        >
                            Artists
                        </NavLink>
                        <NavLink
                            to="/stages-list"
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                            }
                        >
                            Stages
                        </NavLink>
                        {isAuthenticated && (
                            <>
                                <NavLink
                                    to="/create-ticket"
                                    className={({ isActive }) =>
                                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                    }
                                >
                                    Create Tickets
                                </NavLink>
                                <NavLink
                                    to="/create-artist"
                                    className={({ isActive }) =>
                                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                    }
                                >
                                    Add Artist
                                </NavLink>
                                <NavLink
                                    to="/create-stage"
                                    className={({ isActive }) =>
                                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                    }
                                >
                                    Create Stage
                                </NavLink>
                            </>
                        )}
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
                                    className={styles.iconImage}
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
                                            className={styles.iconImage}
                                        />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        key="signup"
                                        to={loginRegisterLinks[0].href}
                                        className={`${styles.authButton} ${styles.signUpButton}`}
                                    >
                                        Sign Up
                                    </Link>
                                    <Link
                                        key="login"
                                        to={loginRegisterLinks[1].href}
                                        className={`${styles.authButton} ${styles.logInButton}`}
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
                                        className="h-12 w-auto"
                                        src={profileIcon}
                                        alt="profile icon"
                                    />
                                    <p className="text-white">{email}</p>
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
                            <HamburgerMenu
                                setIsMenuOpen={setIsMenuOpen}
                                isAuthenticated={isAuthenticated}
                            />
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

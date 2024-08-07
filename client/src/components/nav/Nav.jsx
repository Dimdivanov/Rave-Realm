import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { loginRegisterLinks } from '../../constants';

import logo from '../../assets/icons/logo.ico';
import info from '../../assets/icons/info.png';
import profileIcon from '../../assets/icons/profileIcon.png';
import styles from './Nav.module.css';

import HamburgerMenu from './hamburger-menu-profile/HamburgerMenu';
import NavigationMainMenu from './navigation-main-menu/NavigationMainMenu';
import ProfileMenu from './profile-menu/ProfileMenu';
import MobileMenu from './mobile-menu/MobileMenu';


export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const { isAuthenticated, email } = useContext(AuthContext);

    const handleProfileClick = () => {
        setIsProfileMenuOpen((prevState) => !prevState);
        setIsMenuOpen(false); // Close the mobile menu if it's open
    };

    const profileMenuOpt = {
        info,
        profileIcon,
        styles,
        handleProfileClick,
        loginRegisterLinks,
        setIsMenuOpen,
        isAuthenticated,
    };

    const mobileMenuOpt = {
        isMenuOpen,
        setIsMenuOpen,
        profileIcon,
        email,
        isAuthenticated,
    };

    return (
        <>
            <header className="inset-x-0 top-0 z-50 fixed bg-black bg-opacity-5">
                <nav
                    className="flex items-center justify-between p-2 lg:px-8"
                    aria-label="Global"
                >
                    <NavigationMainMenu
                        logo={logo}
                        styles={styles}
                        isAuthenticated={isAuthenticated}
                    />
                    <ProfileMenu {...profileMenuOpt} />
                </nav>

                {/* Profile Menu */}
                {isProfileMenuOpen && (
                    <div
                        className="fixed inset-0 z-50"
                        onClick={() => setIsProfileMenuOpen(false)}
                    >
                        <div
                            className="mt-5 backdrop-blur-sm bg-opacity-15 absolute top-16 right-0 z-50 w-full max-w-sm bg-black p-6 ring-1 ring-gray-900/10 rounded-lg"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex items-center justify-between">
                                <div className="-m-1.5 p-1.5 flex items-center">
                                    <img
                                        className="h-12 w-auto"
                                        src={profileIcon}
                                        alt="profile icon"
                                    />
                                    <p className="text-white ml-2">{email}</p>
                                </div>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-white"
                                    onClick={() => setIsProfileMenuOpen(false)}
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
                                setIsProfileMenuOpen={setIsProfileMenuOpen}
                                isAuthenticated={isAuthenticated}
                            />
                        </div>
                    </div>
                )}

                <MobileMenu {...mobileMenuOpt} />
            </header>
        </>
    );
}

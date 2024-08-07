import { Link } from 'react-router-dom';

export default function ProfileMenu({
    info,
    profileIcon,
    styles,
    handleProfileClick,
    loginRegisterLinks,
    setIsMenuOpen,
    isAuthenticated,
    isMenuOpen,
}) {
    return (
        <>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end p-2">
                <div className="flex space-x-4 p-2">
                    <Link key="testPage" to="/shopping-bag" className="w-15 pt-2 px-4 p-2">
                        <img src={info} alt="/" className={styles.iconImage} />
                    </Link>

                    {isAuthenticated ? (
                        <>
                            
                                <div key="profileIcon" className="pt-2 px-4">
                                    <img
                                        alt="My Profile"
                                        src={profileIcon}
                                        className={styles.iconImage}
                                        onClick={handleProfileClick}
                                    />
                                </div>
                           
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
        </>
    );
}

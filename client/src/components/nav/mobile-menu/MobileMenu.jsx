import HamburgerMenu from '../hamburger-menu-profile/HamburgerMenu';
import MobileHamburgerMenu from '../hamburger-menu-profile/MobileHamburgerMenu';

export default function MobileMenu({
    isMenuOpen,
    setIsMenuOpen,
    profileIcon,
    email,
    isAuthenticated,
}) {
    
    return (
        <>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-25"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="mt-5 backdrop-blur-sm bg-opacity-15 absolute top-16 right-0 z-50 w-full max-w-sm bg-black p-6 ring-1 ring-gray-900/10 rounded-lg">
                        <div className="flex items-center justify-between">
                            <img
                                className="h-12 w-auto"
                                src={profileIcon}
                                alt="profile icon"
                            />
                            <p className="text-white">{email}</p>
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
                        
                        <MobileHamburgerMenu
                            isAuthenticated={isAuthenticated}
                            setIsMenuOpen={setIsMenuOpen}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

import { Link } from 'react-router-dom';

export default function MobileHamburgerMenu({ isAuthenticated, setIsMenuOpen }) {
    return (
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
                    to="/stages"
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Stages
                </Link>
                {isAuthenticated && (
                    <>
                        <Link
                            to="/my-lineup"
                            className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            My Lineup
                        </Link>
                        <Link
                            to="/logout"
                            className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-red-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Logout
                        </Link>
                    </>
                )}
                {/* Additional links specific to the mobile menu can be added here */}
            </div>
        </div>
    );
}

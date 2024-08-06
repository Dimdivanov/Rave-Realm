import { Link } from 'react-router-dom';

export default function HamburgerMenu({ isAuthenticated, setIsMenuOpen }) {
    return (
        <div className="mt-6">
            <div className="space-y-2">
                <Link
                    to="/get-tickets"
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Get Tickets
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
            </div>
        </div>
    );
}

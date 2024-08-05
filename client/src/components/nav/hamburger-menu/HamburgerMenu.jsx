import { Link } from 'react-router-dom';

export default function HamburgerMenu({ isAuthenticated, setIsMenuOpen }) {
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
                    to="/stages-list"
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-800"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Stages
                </Link>
                {/* Conditionally render additional links based on authentication */}
                {isAuthenticated && (
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
}

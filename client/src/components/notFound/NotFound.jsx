import { Link } from 'react-router-dom';

import notFoundPortal from '/src/assets/images/decorations/notFoundPortal.png';

export default function NotFound() {
    return (
        <>
            <section
                id="notfound"
                className="w-full flex items-center justify-center min-h-screen bg-black relative bg-gradient-to-b from-purple-800 to-rgb-400"
            >
                <div className="text-center">
                    <img src={notFoundPortal} alt="Not-Found" className="relative z-20" />
                   
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

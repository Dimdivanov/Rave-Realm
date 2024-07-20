import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <section
                id="notfound"
                className="w-full flex items-center justify-center min-h-screen bg-black relative bg-gradient-to-b from-purple-800 to-rgb-400"
            >
                <div className="text-center">
                    <p className="text-xl font-semibold text-indigo-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
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

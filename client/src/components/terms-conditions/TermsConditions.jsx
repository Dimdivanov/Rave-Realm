import { Link } from 'react-router-dom';

export default function TermsConditions() {
    return (
        <>
            <section
                id="terms"
                className="relative bg-black bg-gradient-to-b from-purple-800 to-rgb-400 min-h-screen pt-20 lg:pt-16"
            >
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white">
                                Terms and Conditions
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Please read our terms and conditions carefully. By using
                                our services, you agree to comply with these terms.
                            </p>
                        </div>
                        <div className="mt-10 space-y-8">
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    1. Acceptance of Terms
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    By accessing and using our services, you accept and
                                    agree to be bound by these terms and conditions.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    2. Use of Service
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    You agree to use our services only for lawful purposes
                                    and in a manner that does not infringe on the rights
                                    of others.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    3. Limitation of Liability
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    We are not liable for any indirect, incidental, or
                                    consequential damages arising from the use of our
                                    services.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    4. Changes to Terms
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    We reserve the right to modify these terms at any
                                    time. Your continued use of our services constitutes
                                    acceptance of any changes.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    5. Contact Us
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    If you have any questions about these terms, please
                                    contact us at support@example.com.
                                </p>
                            </div>
                            {/* Add more terms as needed */}
                        </div>
                        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-6">
                            <Link
                                to="/get-tickets"
                                className="relative z-10 rounded-full bg-gradient-to-r from-[rgb(116,47,255)] to-[rgb(230,35,196)] px-6 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-200 hover:from-[rgb(100,35,255)] hover:to-[rgb(220,35,196)] hover:scale-105 hover:shadow-xl border-2 border-white"
                            >
                                Get Your Tickets
                            </Link>
                            <Link
                                to="/create-stage"
                                className="relative z-10 rounded-full bg-transparent border-2 border-[rgb(116,47,255)] px-4 py-2 text-lg font-bold text-white shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg opacity-90"
                            >
                                Be a Creator
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

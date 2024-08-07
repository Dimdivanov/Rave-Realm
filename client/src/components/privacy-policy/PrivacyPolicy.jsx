import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <>
            <section
                id="privacy-policy"
                className="relative bg-black bg-gradient-to-b from-purple-800 to-rgb-400 min-h-screen pt-20 lg:pt-16"
            >
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white">
                                Privacy Policy
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Your privacy is important to us. Please review our privacy
                                policy to understand how we collect, use, and protect your
                                information.
                            </p>
                        </div>
                        <div className="mt-10 space-y-8">
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    1. Information Collection
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    We collect various types of information to provide and
                                    improve our services. This includes personal
                                    information you provide directly and data we collect
                                    automatically.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    2. Use of Information
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    The information we collect is used to enhance your
                                    experience, communicate with you, and ensure the
                                    quality of our services.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    3. Data Security
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    We implement security measures to protect your data
                                    from unauthorized access or disclosure. However, no
                                    method of transmission over the internet is completely
                                    secure.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    4. Third-Party Services
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    We may use third-party services to assist in providing
                                    our services. These services may have their own
                                    privacy policies which we encourage you to review.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    5. Changes to Privacy Policy
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    We may update this privacy policy from time to time.
                                    Any changes will be posted on this page with an
                                    updated revision date.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-white">
                                    6. Contact Us
                                </h2>
                                <p className="mt-2 text-lg text-gray-300">
                                    If you have any questions about this privacy policy,
                                    please contact us at privacy@example.com.
                                </p>
                            </div>
                            {/* Add more sections as needed */}
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

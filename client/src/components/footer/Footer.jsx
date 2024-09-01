import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <section className="padding-x padding-t pb-8 bg-black">
                <footer className="py-6">
                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6 mb-6">
                        <Link to="https://www.tiktok.com/en/" className="icon text-xl">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/icons%2FtiktokIcon.png?alt=media&token=be375c79-0615-4513-bba3-98941c29509f" // Make sure the file extension is correct
                                alt="xIcon"
                                className="w-6 h-6" // Adjust size as needed
                            />
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link to="https://x.com/home?lang=en" className="icon text-xl">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/icons%2FxIcon.png?alt=media&token=74311537-db84-4bbe-bf8e-825fd8242b86" // Make sure the file extension is correct
                                alt="xIcon"
                                className="w-6 h-6" // Adjust size as needed
                            />
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link
                            to="https://www.instagram.com/?hl=en"
                            className="icon text-xl"
                        >
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/icons%2FinstaIcon.png?alt=media&token=f9f962f9-c94f-4b50-80c0-16d1504d0102" // Make sure the file extension is correct
                                alt="xIcon"
                                className="w-6 h-6" // Adjust size as needed
                            />
                            <i className="fab fa-tiktok" />
                        </Link>
                        <Link to="https://www.youtube.com/" className="icon text-xl">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/icons%2FutubeIcon.png?alt=media&token=ea80d4af-d41b-4622-b8fc-fed76cbd84e4" // Make sure the file extension is correct
                                alt="xIcon"
                                className="w-6 h-6" // Adjust size as needed
                            />
                            <i className="fab fa-youtube" />
                        </Link>
                    </div>
                    {/* Menu Links */}
                    <div className="flex justify-center space-x-6 mb-6 text-gray-400">
                        <Link to="/FAQ" className="hover:underline">
                            FAQ
                        </Link>
                        <Link to="/privacy-policy" className="hover:underline">
                            Privacy &amp; Policy
                        </Link>
                        <Link to="/terms-conditions" className="hover:underline">
                            Terms &amp; Conditions
                        </Link>
                        <Link to="/contacts" className="hover:underline">
                            Contacts
                        </Link>
                    </div>
                    {/* Copyright Text */}
                    <div className="text-center text-gray-400">
                        © 2024 DimIv. All Rights Reserved. Powered by React.
                    </div>
                </footer>
            </section>
        </>
    );
}

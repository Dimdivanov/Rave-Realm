import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <section className="padding-x padding-t pb-8 bg-black">
                <footer className="py-6">
                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6 mb-6">
                        <Link to="#" className="icon text-xl">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link to="#" className="icon text-xl">
                            <i className="fab fa-tiktok" />
                        </Link>
                        <Link to="#" className="icon text-xl">
                            <i className="fab fa-youtube" />
                        </Link>
                        <Link to="#" className="icon text-xl">
                            <i className="fab fa-facebook" />
                        </Link>
                        <Link to="#" className="icon text-xl">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link to="#" className="icon text-xl">
                            <i className="fab fa-telegram" />
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
                        <Link to="/contact" className="hover:underline">
                            Contact
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

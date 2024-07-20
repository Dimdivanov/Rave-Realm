export default function Footer() {
    return (
        <>
            <section className="padding-x padding-t pb-8 bg-black">
                <footer className="py-6">
                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="#" className="icon text-xl">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className="icon text-xl">
                            <i className="fab fa-tiktok" />
                        </a>
                        <a href="#" className="icon text-xl">
                            <i className="fab fa-youtube" />
                        </a>
                        <a href="#" className="icon text-xl">
                            <i className="fab fa-facebook" />
                        </a>
                        <a href="#" className="icon text-xl">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="#" className="icon text-xl">
                            <i className="fab fa-telegram" />
                        </a>
                    </div>
                    {/* Menu Links */}
                    <div className="flex justify-center space-x-6 mb-6 text-gray-400">
                        <a href="#" className="hover:underline">
                            FAQ
                        </a>
                        <a href="#" className="hover:underline">
                            Privacy &amp; Policy
                        </a>
                        <a href="#" className="hover:underline">
                            Terms &amp; Conditions
                        </a>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
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

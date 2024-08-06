import { Link, NavLink } from "react-router-dom";

export default function NavigationMainMenu({logo, styles, isAuthenticated}) {
    return (
        <>
            <div className="flex lg:flex-1">
                <Link to="/" className="relative -m-1.5 p-1.5 group">
                    <img
                        className="h-28 w-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        src={logo}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-6 lg:px-6 lg:py-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/get-tickets"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                    }
                >
                    Tickets
                </NavLink>
                <NavLink
                    to="/artists"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                    }
                >
                    Artists
                </NavLink>
                <NavLink
                    to="/stages-list"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                    }
                >
                    Stages
                </NavLink>
                {isAuthenticated && (
                    <>
                        <NavLink
                            to="/create-ticket"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.navLinkActive : ''
                                }`
                            }
                        >
                            Create Tickets
                        </NavLink>
                        <NavLink
                            to="/create-artist"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.navLinkActive : ''
                                }`
                            }
                        >
                            Add Artist
                        </NavLink>
                        <NavLink
                            to="/create-stage"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.navLinkActive : ''
                                }`
                            }
                        >
                            Create Stage
                        </NavLink>
                    </>
                )}
            </div>
        </>
    );
}

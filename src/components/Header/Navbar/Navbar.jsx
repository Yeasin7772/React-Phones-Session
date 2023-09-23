import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between px-5 py-5 shadow-lg">
                <Logo></Logo>
                <ul className="flex gap-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                 isActive ? "text-green-600 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                 isActive ? "text-green-600 underline" : ""
                            }
                        >
                            Favorites
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                 isActive ? "text-green-600 underline" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                  
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
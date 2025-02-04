import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Sport from "../assets/sport.png";
import Home from "../assets/home.png";
import Personalized from "../assets/personalization.png";
import NewsPaper from "../assets/newspaper.png";
import Tourney from "../assets/trophy.png";
import Search from "../assets/search.png";
import "./Navbar.css";

const Navbar = () => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");

    const navItems = [
        { path: "/", label: "Home", icon: Home },
        { path: "/personalized", label: "Personalized", icon: Personalized },
        { path: "/news", label: "News", icon: NewsPaper },
        { path: "/tournaments", label: "Tourney", icon: Tourney }
    ];

    return (
        <nav className="navbar">

            <img src={Sport} alt="Sports logo" className="navbar-logo" />
            <h1 className="app-name-first">Sport</h1>
            <h1 className="new-app-name">i</h1>
            <h1 className="app-name-second">Fy</h1>

            <div className="search">
                <img src={Search} alt="Search" className="nav-icon" />
                <input 
                    type="text"
                    placeholder="Search..."
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <ul className="nav-list">
                {navItems.map(({ path, label, icon }) => (
                    <li key={path} className={location.pathname === path ? "active" : ""}>
                        <Link to={path} className="nav-link">
                            <img src={icon} alt={label} className="nav-icon" />
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

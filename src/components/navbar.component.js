import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">ExcerTracker</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Exercises</Link>    
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link">Create Exrercise Log</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user" className="nav-link">Create User</Link>

                    </li>
                </ul>
            </div>
        </nav>
    )
};
export default Navbar;

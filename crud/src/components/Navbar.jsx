import React from 'react'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-md-10 d-flex justify-content-around">
                        <NavLink exact to="/" className="btn btn-primary">All Users</NavLink>
                        <NavLink exact to="/add" className="btn btn-success">Add User</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import {NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 d-flex justify-content-around">
                        <NavLink to="/add" className="btn btn-primary">All Users</NavLink>
                        <NavLink to="/add" className="btn btn-success">Add User</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

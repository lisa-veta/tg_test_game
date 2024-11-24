import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
    <div>
        <header>
            <h1>пупу</h1>
            <nav>
                <Link to="/">Домой</Link>
            </nav>
        </header>
        <main>{children}</main>
    </div>
);

export default Layout;

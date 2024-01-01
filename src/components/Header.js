import React from "react";
import logo from "../images/guidePRO_logo.png";

// export default function Header() {
export const Header = () => {

    return (
        <nav className="navbar bg-customDark sticky-top">
            <div className="container-fluid">
                <div className="col-md-2 col-lg-2"></div>

                <div className="col-md-1 col-lg-1">
                    <a role="button" className="navbar-nav" href="#">
                        <img src={logo} alt="Logo firmy hiredUP" id="logo" className="img-fluid" />
                    </a>
                </div>
                <div className="col-md-7 col-lg-7"></div>
                <div className="col-md-1 col-lg-1">
                    <div role="button" className="navbar-nav" href="#">
                        <span className="material-symbols-outlined">login</span>
                    </div>
                </div>
                <div className="col-md-1 col-lg-1"></div>

            </div>
        </nav>
    );
}
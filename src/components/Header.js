import React from "react";
import logo from "../images/guidePRO_logo.png";

export const Header = () => {

    return (
        <nav className="navbar bg-customDark opacity-100 sticky-top">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2"></div> {/* Pusta kolumna Bootstrap */}
                <div className="col-md-1 col-lg-1">
                    <a role="button" className="navbar-nav" href="#">
                        <img src={logo} alt="Logo firmy hiredUP" id="logo" className="img-fluid" />
                    </a>
                </div>
                <div className="col-md-6 col-lg-6"></div>
                <div className="col-md-1 col-lg-1 d-flex justify-content-end">
                    <div role="button" className="navbar-nav">
                        <span  className="material-symbols-outlined ourGreen">login</span>
                    </div>
                </div>
                <div className="col-md-2 col-lg-2"></div> {/* Pusta kolumna Bootstrap */}
            </div>
        </nav>
    );
}

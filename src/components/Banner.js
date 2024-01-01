import React from "react";
import photo from "../images/banner.jpg";
import logo from "../images/guidePRO_logo.png";


export const Banner = () => {
    const backgroundImageUrl = '../images/banner.jpg';

    return (
        <div className="navbar bg-customDark sticky-top">

                <div id="banner" className="col-md-12 col-lg-12 position-relative container-fluid" style={{ height: '200px' }}>

                        <div className="col-md-2 col-lg-2"></div>
                        <div className=" col-md-1 col-lg-2">
                            <input
                                type="text"
                                className="form-control rounded-5 "
                                placeholder=" Gdzie się wybierasz? "
                            />
                        </div>
                        <div className="col-md-7 col-lg-8"></div>


                </div>

        </div>
    );
};
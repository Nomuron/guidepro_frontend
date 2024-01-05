import React from "react";
import photo from "../images/banner.jpg";
import logo from "../images/guidePRO_logo.png";


export const Banner = () => {
    const backgroundImageUrl = '../images/banner.jpg';

    return (
        <div className="navbar bg-customDark ">

                <div id="banner" className="col-md-12 col-lg-12 position-relative container-fluid" style={{ height: '200px' }}>

                        <div className="col-lg-2"></div>
                        <div className="col-lg-3">
                            <input
                                type="text"
                                className="form-control rounded-5 "
                                placeholder=" Gdzie się wybierasz? "
                                style={{ height: '50px' }}
                            />
                        </div>
                        <div className="col-lg-7"></div>


                </div>

        </div>
    );
};

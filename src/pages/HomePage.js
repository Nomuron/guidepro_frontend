import React from "react";
import {Header} from "../components/Header";
import {Banner} from "../components/Banner";
import {Filters} from "../components/Filters";


export const HomePage = () => {


    return (

        <div className="main container-fluid bg-light" >
            <div className="row">
                <Header />
                <Banner/>
                <Filters/>
            </div>
        </div>

    );
}
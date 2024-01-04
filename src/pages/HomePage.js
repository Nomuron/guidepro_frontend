import React from "react";
import {Header} from "../components/Header";
import {Banner} from "../components/Banner";
import {Filters} from "../components/Filters";
import {Content} from "../components/Content";


export const HomePage = () => {


    return (

        <div className="main container-fluid bg-light" >
            <div className="row">
                <Header />
                <Banner/>
                <Filters/>
                <Content/>
            </div>
        </div>

    );
}
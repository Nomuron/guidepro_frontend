import React from "react";
import {TripTile} from "../components/TripTile";
import tripsData from "../data/trips.json";

export const Content = () => {

    return (
        <>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
            <div className="lg:grid lg:grid-cols-3">
                <TripTile trips={tripsData}/>
            </div>
            </div>
            <div className="col-lg-2"></div>
        </>
    );
}
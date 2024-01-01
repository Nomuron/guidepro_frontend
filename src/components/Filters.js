import React from "react";
import {useState} from 'react';
import {Segmented, SegmentedButton,} from 'konsta/react';

export const Filters = () => {

    const [activeSegmented, setActiveSegmented] = useState(1);
    return (

        <div className="navbar bg-customDark sticky-top">
            <div id="filters" className="col-md-12 col-lg-12 position-relative container-fluid"
                 style={{height: '50px'}}>
                <div className="col-md-2 col-lg-2"></div>
                <div className=" col-md-6 col-lg-6"></div>
                <div className=" col-md-2 col-lg-2">
                    <div className="btn-group d-flex segmented-button " role="group">
                        <Segmented rounded outline>
                            <SegmentedButton
                                active={activeSegmented === 1}
                                onClick={() => setActiveSegmented(1)}
                            >
                                wycieczki
                            </SegmentedButton>
                            <SegmentedButton
                                active={activeSegmented === 2}
                                onClick={() => setActiveSegmented(2)}
                            >
                                przewodnicy
                            </SegmentedButton>

                        </Segmented>
                    </div>
                </div>
                <div className="col-md-2 col-lg-2"></div>
            </div>
        </div>
    );
};

import React from "react";
import {useState} from 'react';
import {Segmented, SegmentedButton, Button} from 'konsta/react';

export const Filters = () => {

    const [activeSegmented, setActiveSegmented] = useState(1);
    return (

        <>
            <div id="filters" className=" position-relative container-fluid"
                 style={{height: '50px'}}>
                <div className="row align-items-center">
                <div className="col-lg-2"></div>

                <div className=" col-lg-1 ">
                    <Button className="bg-green-900 hover:bg-green-1000 ">
                        <span className="material-symbols-outlined">&#xe429;</span>
                        <span style={{ marginLeft: '22px' }}>Filtry</span>
                    </Button>
                </div>

                <div className="col-lg-5"></div>

                <div className=" col-lg-2">
                    <div className="btn-group d-flex segmented-button  " role="group">
                        <Segmented rounded outline >
                            <SegmentedButton
                                className={activeSegmented === 1 ? "bg-green-900 hover:bg-green-1000" : "bg-transparent text-green-900"}
                                active={activeSegmented === 1}
                                onClick={() => setActiveSegmented(1)}
                            >
                                wycieczki
                            </SegmentedButton>
                            <SegmentedButton
                                className={activeSegmented === 2 ? "bg-green-900 hover:bg-green-1000" : "bg-transparent text-green-900"}
                                active={activeSegmented === 2}
                                onClick={() => setActiveSegmented(2)}
                            >
                                przewodnicy
                            </SegmentedButton>

                        </Segmented>
                    </div>
                </div>
                <div className=" col-lg-2"></div>
                </div>
            </div>

        </>
    );
};

import React from "react";
import web from "../src/images/img2.svg"
import { NavLink } from "react-router-dom";
const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1> {props.name} <strong className="brand-name">ReiSezer</strong></h1>
                                    <h2>
                                        We are the team of talented developer making websites
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit}
                                            className="btn-get-started ">
                                            {props.btnname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 heaeder-img">
                                    <img
                                        className="header-img img-fluid animated"
                                        alt="Common Img"
                                        src={props.imgsrc} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Common;
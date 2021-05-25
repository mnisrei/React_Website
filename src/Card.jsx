import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.cardImg} className="card-img-top" alt={props.title} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.title}</h5>
                        <p className="card-text"> Our Team have the mastery to all of your problem and we provide best Industry Solutions for {props.title}</p>
                        <NavLink to="" className="btn btn-primary">Visit</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;
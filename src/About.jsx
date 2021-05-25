import React from "react";
import Common from "./Common";
import aboutimg from "../src/images/hero-img.png";
const About =()=>{
    return(
        <>
        <Common
            name="Welcome to About Page"
            imgsrc={aboutimg}
            visit="/contact"
            btnname="Contact Now"
        />
        </>
    );
}
export default About;
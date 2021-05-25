import React from "react";
import Common from "./Common";
import homeimg from "../src/images/img2.svg";
const Home = () => {
    return (
        <>
        <Common
            name="Grow your business with"
            imgsrc={homeimg}
            visit="/service"
            btnname="Get Started"
        />
        </>
    );
}
export default Home;
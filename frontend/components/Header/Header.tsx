import React from "react";
import Navi from "./Navi";
import Jumbotron from "./Jumbotron";

const Header = () => {
    return (
        <React.Fragment>
            <Navi />
            <Jumbotron />
        </React.Fragment>
    );
};

export default Header;
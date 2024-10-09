import { Link } from "react-router-dom";
import { Navbar} from "react-bootstrap";
import React from "react";

function NavigationBar() {

    return(
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/browse-characters">Browse Character</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/character-details/:id">Character Details</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/comics">Comics</Navbar.Brand> <br />
        </Navbar>
    );
}

export default NavigationBar;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faUser} className="user-icon" />
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;

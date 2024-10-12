"use client";

import { BrowserRouter as Router } from "react-router-dom";
import GoBack from "./GoBack";

const NavBar = () => {
  return (
    <div className="nav-main">
      <Router>
        <GoBack />
      </Router>
      <a className="nav-text" href="tel:+37063003800">Pagalba su Programėle: +37063003800</a>
    </div>
  );
};

export default NavBar;

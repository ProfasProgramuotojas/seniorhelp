"use client";

import GoBack from "./GoBack";

const NavBar = () => {
  return (
    <div className="nav-main">
      <GoBack />
      <a className="nav-text" href="tel:+37063003800">
        Pagalba su Programėle: +37063003800
      </a>
    </div>
  );
};

export default NavBar;

"use client";

import GoBack from "./GoBack";

const NavBar = () => {
  return (
    <div className="nav-main">
      <GoBack />
      <a className="nav-text" href="tel:+37060000000">
        Pagalba su Programėle: +37060000000
      </a>
    </div>
  );
};

export default NavBar;

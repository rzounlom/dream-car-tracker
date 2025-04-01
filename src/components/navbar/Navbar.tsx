import "./Navbar.css";

import { FC, useEffect, useState } from "react";

import { NewCar } from "../../types";

type NavbarProps = {
  handleOpen: () => void;
  addCar: (newCar: NewCar) => void;
};

const Navbar: FC<NavbarProps> = ({ handleOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className={`navbar-brand ${scrolled ? "scrolled" : ""}`}>
        <a href="/" className={`${scrolled ? "scrolled" : ""}`}>
          DCT
        </a>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <a href="/#cars" className={scrolled ? "scrolled" : ""}>
              Cars
            </a>
          </li>
          <li>
            <a
              // href="#/cars"
              className={scrolled ? "scrolled" : ""}
              onClick={handleOpen}
            >
              Add Car
            </a>
          </li>
          <li>
            <a href="/#contact" className={scrolled ? "scrolled" : ""}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

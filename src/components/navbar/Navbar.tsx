import "./Navbar.css";

import { FC, useEffect, useState } from "react";

const Navbar: FC = () => {
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
            <a href="#" className={scrolled ? "scrolled" : ""}>
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

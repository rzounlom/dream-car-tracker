import "./Navbar.css";

import { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

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
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className={`navbar-brand ${scrolled ? "scrolled" : ""}`}>
          <Link to="/" className={`${scrolled ? "scrolled" : ""}`}>
            DCT
          </Link>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <Link to="/cars" className={scrolled ? "scrolled" : ""}>
                Cars
              </Link>
            </li>

            <li>
              <Link to="/favorites" className={scrolled ? "scrolled" : ""}>
                Favorites
              </Link>
            </li>
            <li>
              <Link to="add" className={scrolled ? "scrolled" : ""}>
                Add Car
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

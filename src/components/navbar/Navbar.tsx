import "./Navbar.css";

import { FC, useEffect, useState } from "react";

import AddCarModal from "../modals/AddCarModal";

const Navbar: FC = () => {
  const [show, setShow] = useState(false);
  // Show the modal
  const handleOpen = () => setShow(true);
  // Hide the modal
  const handleClose = () => setShow(false);
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
      <AddCarModal show={show} handleClose={handleClose} />
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
    </>
  );
};

export default Navbar;

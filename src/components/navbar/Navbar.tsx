import "./Navbar.css";

import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">DCT</a>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <a href="/#cars">Cars</a>
          </li>
          <li>
            <a href="#">Add Car</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

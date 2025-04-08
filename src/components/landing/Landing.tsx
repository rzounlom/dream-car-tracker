import "./Landing.css";

import { FC } from "react";
import { Link } from "react-router-dom";

const Landing: FC = () => {
  return (
    <div className="landing">
      <div className="heading">
        <h1>Dream Car Tracker</h1>
        <button data-toggle="modal" data-target="#addCarModal">
          <Link to="/cars">View Cars</Link>
        </button>
      </div>
    </div>
  );
};

export default Landing;

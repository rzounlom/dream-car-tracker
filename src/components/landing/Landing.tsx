import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="heading">
        <h1>Dream Car Tracker</h1>
        <button data-toggle="modal" data-target="#addCarModal">
          <a href="/#cars">View Cars</a>
        </button>
      </div>
    </div>
  );
};

export default Landing;

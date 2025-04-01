import "./Navbar.css";

import { FC, useEffect, useState } from "react";

import { NewCar } from "../../types";

type NavbarProps = {
  handleOpen: () => void;
  addCar: (newCar: NewCar) => void;
};

const Navbar: FC<NavbarProps> = ({ handleOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  // const newCar = {
  //   year: "2025",
  //   make: "Ferrari",
  //   model: "SF90",
  //   description:
  //     "Not all plug-in hybrids are built for efficiency; some are built for speed. The Ferrari SF90 is one such counterexample, combining a twin-turbo V-8 with a trio of electric motors and a 6.5-kWh battery pack to spit out 986 horsepower in standard trim. The SF90XX models, laser-focused on race-track driving, get an extra 30 horsepower—as if they needed it—awarding the SF90 lineup entry in the four-digit power club. The massive power output goes to all four wheels with the front tires driven electrically. Double-X versions also have a stripped-down interior and other changes in the pursuit of all-out lap time. The standard SF90 is now available only as a convertible called the Spider, with a luxurious cabin lined in leather and featuring an unconventional screen-and-control layout. The XX can still be had in Stradale coupe form or as a Spider. Whichever version of the SF90 you fancy in your wild imaginings, know that the powertrain, aerodynamics, and chassis wizardry come together to make one of the best mid-engine sports cars in the world—Ferrari or otherwise.",
  //   imageUrl:
  //     "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-sf90xx-134-6552496c82eea.jpg?crop=1xw:1xh;center,top&resize=980:*",
  //   favorite: false,
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // };

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

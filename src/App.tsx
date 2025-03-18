import "./App.css";

import CarsList from "./components/cars/CarsList";
import { FC } from "react";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <CarsList />
      <Footer />
    </div>
  );
};

export default App;

import "./App.css";

import CarsList from "./components/cars/CarsList";
import { FC } from "react";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <CarsList />
    </div>
  );
};

export default App;

import { FC } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout: FC = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

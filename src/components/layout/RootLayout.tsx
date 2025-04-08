import { FC } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import PageContainer from "./PageContainer";

const RootLayout: FC = () => {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default RootLayout;

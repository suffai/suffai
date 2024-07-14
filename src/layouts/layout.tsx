import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function LayoutHome({ children }: Props): JSX.Element {

  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default LayoutHome;

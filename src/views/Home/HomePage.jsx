import React from "react";
import Contact from "../../components/Contact/Contact";
import LandingPage from "../../components/LandingPage/LandingPage";
import NavBar from "../../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <LandingPage/>
      <Contact />
    </>
  );
}

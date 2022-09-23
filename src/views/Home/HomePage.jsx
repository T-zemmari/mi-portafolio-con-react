import React from "react";
import LandingPage from "../../components/LandingPage/LandingPage";
import NavBar from "../../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <LandingPage bg={'violet'}/>
    </>
  );
}

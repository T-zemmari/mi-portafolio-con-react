import React, { useEffect ,useState } from "react";
import Contact from "../../components/Contact/Contact";
import ContactTwo from "../../components/Contact/Contact-two";
import Header from "../../components/Header/Header";
import LandingPage from "../../components/LandingPage/LandingPage";
import NavBar from "../../components/Navbar/Navbar";



export default function HomePage() {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  useEffect(() => {

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () =>
      window.removeEventListener('resize', updateDimensions);
  }, [])

  const responsive = {
    showTopNavMenu: width > 1023
  }
  return (
    <>

      <NavBar showTopNavMenu={responsive.showTopNavMenu} />
      <Header />
      <LandingPage />
      {/* <Contact /> */}
      <ContactTwo />
    </>
  );
}

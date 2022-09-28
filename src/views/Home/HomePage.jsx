import React, { useEffect ,useState } from "react";
import About from "../../components/About/About";
import ContactTwo from "../../components/Contact-two/Contact-two";
import DividerCustom from "../../components/Divider/DividerCustom";
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
  console.log(width);

  return (
    <>
      <Header/>
      <NavBar/>      
      <LandingPage/>
      <DividerCustom section="Sobre mi"/>
      <About/>  
      <DividerCustom section="Contacto"/>
      <ContactTwo/>
    </>
  );
}

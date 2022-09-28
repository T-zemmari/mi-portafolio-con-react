import React, { useEffect } from "react";
import "./About.css";
import MiFoto from "../../assets/images/Sin-Fondo.png";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="about-container" id="about">
      <div className="contenedor-sobre-mi">
        <div className="about-desc" data-aos="fade-left">
          <h3>Bienvenidos a mi portfolio personal </h3>
          <p>
            <span>
              Mi nombre es <strong>Tarek Zemmari</strong> , soy{" "}
              <strong>Full Stack Developer</strong> , de nacionalidad española,
              soy de Valencia y llevo en españa, desde los 19 años.
            </span>
            <br />
            Siempre he querido dedicarme a la programacion , lo tenia clarisimo
            desde el bachiller, y para eso estudie informatica , y despues gracias al bootcamp que he superado con cierta satifación diria yo, ahora me dedido a lo 
            que mas me apasiona , que es el desarrollo web.

            Me encanta crear aplicaciones web de cero , el proceso de buscar la mejor solución a lo que quiere un cliente , es muy motivador ya que  considero que cuando te gusta 
            algo , no importan los retos, los disfrutas igual.
            <br />
            Ahora me dedico al desarrollo y maquetación , trabajo sobre todo con php tanto puro , como con su freamework symfony 5.4, y en el front trabajamos con 
             html y jquery, aunque he realizado varios trabajos con react.         
         
          </p>
        </div>
        <div className="about-img" data-aos="fade-left">
          <img src={MiFoto} alt="MiFoto" />
        </div>
      </div>
    </div>
  );
};

export default About;

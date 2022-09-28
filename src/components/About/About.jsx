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
            desde el bachiller, y para eso estudie informatica en la
            universidad. <br />
            Vine a españa para estudiar en la politecnica de valencia, pero al
            final , curse mis estudios en la UCLM, no llegue a terminar la
            carrera por motivos personales, pero mas adelante retome los
            estudios, y obtuve mi titulos superior en mecatronica industrial.{" "}
            <br />
            <br />
            Despues de varios años y sobre todo despues de trabajar como
            mecatronico, me di cuenta al programar tanto en tiaportal,
            robotstudio, y cnc, que hechaba de menos la programacion, asi que me
            arme de valor , estudie un poco por mi cuenta , (soy muy
            autodidacta), pero llego la hora de meterme de lleno en la
            progrmacion, y elegi el <strong>
              bootcamp de desarrollo web
            </strong>{" "}
            , que decir que estoy encantado, he aprendido muchos stacks, y lo
            tengo mas claro todavia, Quiero Dedicarme al desarrollo web. Me
            considero como perfil Frontend, y lo eligo porque me gusta el diseño
            tambien, pero puedo programar tanto en Backend como en Frontend. He
            hecho varios proyectos, algunos por mi cuenta, y otros en
            colaboración con varios compañeros, siguiendo la filosofia agile,
            con un scrum master.con git y gitFlow...
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

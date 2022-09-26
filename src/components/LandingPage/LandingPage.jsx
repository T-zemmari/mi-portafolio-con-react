import './LandingPage.css';
import imagen_principal from '../../assets/images/imagen-principal.jpg';

export default function LandingPage(props) {
  return (
    <div className="container-fluid" style={{background:'violet','width':'100%',height:'100vh'}}>
      <div className="div-contenedor-landing-page">

        <div className="contenedor-saludos">
          Hola
        </div>
        <div className="contenedor-imagen-personal">
          <div className="contenedor_imagen_2">
            <img className="imagen-principal" src={imagen_principal} alt="imagen_principal" />
          </div>
        </div>

      </div>
        
    </div>
  );
};

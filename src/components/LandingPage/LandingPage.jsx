import './LandingPage.css';
import ImagenPrincipal from '../../assets/images/imagen_principal_2.png';

export default function LandingPage(props) {
  return (

    <div className="contenedor-principal mt-5">
      <div className='Contenedor-saludo'>

        <div className="contenedor-saludo-mas-imagen">
          <div className="contenedor-saludo">
            <h1 className='h1-custom'>Hola !! <span>Soy Tarek Zemmari</span></h1>
            <h2>Me encanta el desarrollo web</h2>
          </div>
          <div className="contenedor-imagen-principal">
            <img className="imagen-principal" src={ImagenPrincipal} alt="Tarek" />
          </div>
        </div>

      </div>
      <div className="custom-shape-divider-bottom-1664218420">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>

    </div>
  );
};

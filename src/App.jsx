import './App.css';
import imagen1 from "/src/assets/images/PHOTO-2024-12-07-09-06-34.jpg";
import imagen2 from "/src/assets/images/PHOTO-2024-12-07-09-07-20.jpg";
import imagen3 from "/src/assets/images/PHOTO-2024-12-07-09-07-38.jpg";
import imagen4 from "/src/assets/images/PHOTO-2024-12-07-09-07-49.jpg";
import favicon from "/src/assets/images/favicon.png";

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        {/* Logo + Título */}
        <div className="flex-1 gap-2">
          <div className="w-8 h-8">
            <img
              alt="El refugio Logo"
              src={favicon} // Asegúrate de importar el favicon
            />
          </div>
          <a className="btn btn-ghost text-2xl">EL REFUGIO</a>
        </div>

        {/* Nuevas Secciones */}
        <div className="hidden md:flex gap-4">
          <a href="#quienes-somos" className=" text-xl btn btn-glass ">Quienes somos</a>
          <a href="#contacto" className="text-xl btn btn-glass">Contacto</a>
          <a href="#tarifas" className="text-xl btn btn-glass">Tarifas</a>
        </div>

        {/* Buscador y Dropdown */}
        <div className="flex-none gap-4">
          {/* Buscador */}
          <div className="form-control">
            {/* <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      /> */}
          </div>

          {/* Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              {/* Icono de menú hamburguesa */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Eventos
                </a>
              </li>
              <li><a>Colegios</a></li>
              <li><a>Pileta</a></li>
              <li><a>Clima</a></li>
            </ul>
          </div>
        </div>
      </div>


      <main className="flex-grow">
        <div className="carousel rounded-box w-97">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={imagen1}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={imagen2}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={imagen3}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={imagen4}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        {/* Contenido principal */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Nuestra Ubicación</h1>
          <div className="map-container mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3302.653106481622!2d-66.05236642402969!3d-34.129629473208574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDA3JzQ2LjciUyA2NsKwMDInNTEuOSJX!5e0!3m2!1ses-419!2sar!4v1734467863378!5m2!1ses-419!2sar"
              width="928"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>


      </main>

      <footer className="footer bg-neutral text-neutral-content p-10 bottom-0 left-0">
        <nav>
          <h6 className="footer-title">Servicios</h6>
          <a className="link link-hover">Identidad de marca</a>
          <a className="link link-hover">Diseño</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Publicidad</a>
        </nav>
        <nav>
          <h6 className="footer-title">Compañía</h6>
          <a className="link link-hover">Sobre nosotros</a>
          <a className="link link-hover">Contacto</a>
          <a className="link link-hover">Empleos</a>
          <a className="link link-hover">Kit de prensa</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Términos de uso</a>
          <a className="link link-hover">Política de privacidad</a>
          <a className="link link-hover">Política de cookies</a>
        </nav>

      </footer>
    </>
  );
}

export default App;

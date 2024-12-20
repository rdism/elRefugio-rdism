import React, { useEffect, useState } from 'react';
import './App.css';
import imagen1 from "/src/assets/images/PHOTO-2024-12-07-09-06-34.jpg";
import imagen2 from "/src/assets/images/PHOTO-2024-12-07-09-07-20.jpg";
import imagen3 from "/src/assets/images/PHOTO-2024-12-07-09-07-38.jpg";
import imagen4 from "/src/assets/images/PHOTO-2024-12-07-09-07-49.jpg";
import favicon from "/src/assets/images/favicon.png";
import { use } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    // Cargar tema guardado en localStorage o usar el predeterminado 
    return localStorage.getItem('selectedTheme') || 'aqua';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('selectedTheme', theme);
  } , [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

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
          <a href="#quienes-somos" className=" text-xl btn btn-glass">Quienes somos</a>
          <a href="#contacto" className="text-xl btn btn-glass">Contacto</a>
          <a href="#tarifas" className="text-xl btn btn-glass">Tarifas</a>
        </div>

        <div className="flex-none gap-4">
          <select
            id="theme-selector"
            value={theme}
            onChange={handleThemeChange}
            className="select select-bordered">
            <option value="mitema">Mi Tema</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="cupcake">Cupcake</option>
            <option value="bumblebee">Bumblebee</option>
            <option value="emerald">Emerald</option>
            <option value="corporate">Corporate</option>
            <option value="synthwave">Synthwave</option>
            <option value="retro">Retro</option>
            <option value="cyberpunk">Cyberpunk</option>
            <option value="valentine">Valentine</option>
            <option value="halloween">Halloween</option>
            <option value="garden">Garden</option>
            <option value="forest">Forest</option>
            <option value="aqua">Aqua</option>
            <option value="lofi">Lofi</option>
            <option value="pastel">Pastel</option>
            <option value="fantasy">Fantasy</option>
            <option value="wireframe">Wireframe</option>
            <option value="black">Black</option>
            <option value="luxury">Luxury</option>
            <option value="dracula">Dracula</option>
            <option value="cmyk">CmYK</option>
            <option value="autumn">Autumn</option>
            <option value="business">Business</option>
          </select>
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
          <div className="map-container relative w-full aspect-video mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2841.8103171927633!2d-66.06285272488051!3d-33.10166217973399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDA2JzA2LjAiUyA2NsKwMDMnMzcuMCJX!5e1!3m2!1ses-419!2sar!4v1734650494315!5m2!1ses-419!2sar"
              className='absolute top-0 left-0 w-full h-full border-0'
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

import './App.css';
import imagen1 from "/src/assets/images/PHOTO-2024-12-07-09-06-34.jpg";
import imagen2 from "/src/assets/images/PHOTO-2024-12-07-09-07-20.jpg";
import imagen3 from "/src/assets/images/PHOTO-2024-12-07-09-07-38.jpg";
import imagen4 from "/src/assets/images/PHOTO-2024-12-07-09-07-49.jpg";

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">EL REFUGIO</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <div className="w-10 rounded-full">
          <img
            alt="El refugio Logo"
            src="favicon.png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            {/* <span className="badge">New</span> */}
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
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

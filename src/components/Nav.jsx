import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoHome from '../images/LOGO BLANCO.png'
import logo2 from '../images/LOGO VERDE.png'
const Nav = () => {
  const [clase, setClase] = useState('nav');
  const [logo, setLogo] = useState(logoHome);
  const location = useLocation();

  const isHome = location.pathname === '/';


  useEffect(() => {
    if (location.pathname === '/') {
      setLogo(logoHome);
    } else if (location.pathname === '/nosotros') {
      setLogo(logo2);}
      else if (location.pathname === '/unite') {
        setLogo(logo2);}
      else if (location.pathname === '/trabajo') {
        setLogo(logo2);}
  }, [location]);

  
  return (
    <>
      <div className={`barra-nav ${isHome ? '' : 'nav-other'}`}>
        <Link to='/'>
         <img src={logo} alt='' />
        </Link>
        <button onClick={() => setClase('nav visible')} className='abrir-menu'>
          <i className='bi bi-list'></i>
        </button>
        <nav className={clase}>
          <button onClick={() => setClase('nav')} className='cerrar-menu'>
            <i className='bi bi-x-lg'></i>
          </button>
          <ul className='nav-list'>
            <li>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <a href='' className={isHome ? 'active' : ''}>Home</a>
              </Link>
            </li>
            <li>
              <Link to='/nosotros' style={{ textDecoration: 'none' }}>
                <a href='' className={location.pathname === '/nosotros' ? 'active' : ''}>Sobre nosotros</a>
              </Link>
            </li>
            <li>
              <Link to='/trabajo' style={{ textDecoration: 'none' }}>
                <a href='' className={location.pathname === '/trabajo' ? 'active' : ''}>Nuestro trabajo</a>
              </Link>
            </li>
            <li>
              <Link to='/unite' style={{ textDecoration: 'none' }}>
                <a href='' className={location.pathname === '/unite' ? 'active' : ''}>Únete al cambio</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};




export default Nav;
import React, { useEffect, useState } from 'react';
import { initializeMobileNav } from './helpers/mobileNavHelpers';
import logo from '/images/Header/MFB Logo.png';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('#hero'); // Estado para la sección activa

  // Definir los menús
  const menus = [
    { id: '#hero', name: 'Home' },
    { id: '#about', name: 'About' },
    { id: '#portfolio', name: 'Gallery' },
    { id: '#services', name: 'Sets' },
    { id: '#resume', name: 'Gigs' },
    { id: '#contact', name: 'Booking' },
  ];

  useEffect(() => {
    const cleanup = initializeMobileNav();

    // Listener para manejar el scroll y actualizar la sección activa
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '#hero'; // Sección por defecto

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 500; // Ajuste para la altura del header
        if (window.scrollY >= sectionTop) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      cleanup(); // Cleanup de la función mobileNavHelpers
      window.removeEventListener('scroll', handleScroll); // Limpiar listener de scroll
    };
  }, []);

  const handleClick = (sectionId) => {
    setActiveSection(sectionId); // Actualizar la sección activa al hacer clic
  };

  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <img src={logo} alt="Logo" />
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              {/* Usamos map para renderizar los menús dinámicamente */}
              {menus.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.id}
                    onClick={() => handleClick(menu.id)}
                    className={activeSection === menu.id ? 'active' : ''}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>
    </>
  );
};

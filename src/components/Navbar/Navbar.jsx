import React, { useEffect, useState } from 'react';
import { initializeMobileNav } from './helpers/mobileNavHelpers';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('#hero'); // Estado para la sección activa

  useEffect(() => {
    const cleanup = initializeMobileNav();
    
    // Listener para manejar el scroll y actualizar la sección activa
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '#hero'; // Default section

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
            <h1 className="sitename">Personal</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a 
                  href="#hero" 
                  onClick={() => handleClick('#hero')} 
                  className={activeSection === '#hero' ? 'active' : ''}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => handleClick('#about')} 
                  className={activeSection === '#about' ? 'active' : ''}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#resume" 
                  onClick={() => handleClick('#resume')} 
                  className={activeSection === '#resume' ? 'active' : ''}
                >
                  Resume
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={() => handleClick('#services')} 
                  className={activeSection === '#services' ? 'active' : ''}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => handleClick('#contact')} 
                  className={activeSection === '#contact' ? 'active' : ''}
                >
                  Contact
                </a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>
    </>
  );
};

import React, { useEffect } from 'react';
import { initializeMobileNav } from './helpers/mobileNavHelpers';

export const Navbar = () => {
  
  useEffect(() => {
    const cleanup = initializeMobileNav();
    return cleanup; // Cleanup function when component unmounts
  }, []);

  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1 className="sitename">Personal</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#" className="active">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              {/* <li>
                <a href="portfolio.html">Portfolio</a>
              </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>
    </>
  );
};

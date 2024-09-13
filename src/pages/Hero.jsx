import React, { useEffect } from 'react';
import Typed from 'typed.js';
// import img from '/images/hero/hero-bg.jpg';
import img from '/images/hero/portadamfb_limpia.jpg';

export const Hero = () => {
  useEffect(() => {
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      let typedStrings = selectTyped.getAttribute('data-typed-items');
      typedStrings = typedStrings.split(',');

      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monta

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img src={img} alt="" data-aos="fade-in" />
        <div className="container" data-aos="zoom-out" data-aos-delay={100}>
          <h2>NICO VITTO</h2>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="DJ, Producer"
            >
              {/* Producer */}
            </span>
            <span className="typed-cursor typed-cursor--blink" />
          </p>
          <div className="social-links">
            <a href="#">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="#">
              <i className="bi bi-facebook" />
            </a>
            <a href="#">
              <i className="bi bi-instagram" />
            </a>
            <a href="#">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
    </>
  );
};

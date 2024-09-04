import React, { useEffect } from 'react';

const ScrollTop = () => {
    useEffect(() => {
        const scrollTop = document.querySelector('.scroll-top');

        function toggleScrollTop() {
            if (scrollTop) {
                if (window.scrollY > 100) {
                    scrollTop.classList.add('active');
                } else {
                    scrollTop.classList.remove('active');
                }
            }
        }

        function handleScrollToTop(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }

        // Agrega los listeners
        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);
        scrollTop.addEventListener('click', handleScrollToTop);

        // Limpia los listeners cuando el componente se desmonte
        return () => {
            window.removeEventListener('load', toggleScrollTop);
            document.removeEventListener('scroll', toggleScrollTop);
            if (scrollTop) {
                scrollTop.removeEventListener('click', handleScrollToTop);
            }
        };
    }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monta

    return (
        <>
            {/* Scroll Top */}
            <a
                href="#"
                id="scroll-top"
                className="scroll-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
        </>
    );
};

export default ScrollTop;

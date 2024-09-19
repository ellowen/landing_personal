import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css'; // Importa los estilos de GLightbox

const Portfolio = () => {

    useEffect(() => {
        // Inicializar GLightbox para las imágenes
        const lightbox = GLightbox({
            selector: '.glightbox', // Selecciona el atributo para identificar los elementos del lightbox
            touchNavigation: true,
            loop: true
        });
        return () => {
            lightbox.destroy(); // Destruye la instancia de GLightbox al desmontar el componente
        };
    }, []);


    const portfolioItems = [
        {
            category: 'filter-app',
            imgSrc: '/images/portfolio/10.jpg',
            title: 'App 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        },
        {
            category: 'filter-product',
            imgSrc: '/images/portfolio/60 (1).jpg',
            title: 'Product 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        },
        // {
        //     category: 'filter-app',
        //     imgSrc: '/images/portfolio/120.jpeg',
        //     title: 'App 1',
        //     description: 'Lorem ipsum, dolor sit amet consectetur',
        // },
        {
            category: 'filter-branding',
            imgSrc: '/images/portfolio/63.jpg',
            title: 'Branding 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        },
        {
            category: 'filter-app',
            imgSrc: '/images/portfolio/160.jpeg',
            title: 'App 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        },
        {
            category: 'filter-app',
            imgSrc: '/images/portfolio/130.jpg',
            title: 'App 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        },

        // Agrega más elementos del portfolio según sea necesario...
    ];

    const filters = ['All', 'App', 'Product', 'Branding', 'Books'];

    return (
        <div>
            {/* Page Title */}
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Portfolio</h1>
                                {/* <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    {/* <div className="container">
            <ol>
              <li><a href="index.html">Home</a></li>
              <li className="current">Portfolio</li>
            </ol>
          </div> */}
                </nav>
            </div>

            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio section">
                <div className="container">
                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        {/* Portfolio Filters */}
                        {/* <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              {filters.map((filter, index) => (
                <li key={index} className={index === 0 ? 'filter-active' : ''}>
                  {filter}
                </li>
              ))}
            </ul> */}

                        {/* Portfolio Items */}
                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                            {portfolioItems.map((item, index) => (
                                <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
                                    <div className="portfolio-content h-100">
                                        <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                                        <div className="portfolio-info">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                            <a
                                                href={item.imgSrc}
                                                title={item.title}
                                                className="glightbox preview-link"
                                                data-gallery="portfolio-gallery-app"
                                            >
                                                <i className="bi bi-zoom-in"></i>
                                            </a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link">
                                                <i className="bi bi-link-45deg"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;

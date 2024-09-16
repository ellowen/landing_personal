import React from 'react';

const Services = () => {
  return (
    <>
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Labels</h1>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs"></nav>
      </div>
      {/* End Page Title */}
      
      <section id="services" className="services section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service-item position-relative">
                {/* Embedding a YouTube video */}
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service-item position-relative">
                {/* Embedding another YouTube video */}
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/* End Service Item */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-item position-relative">
                {/* Embedding a Vimeo video */}
                <div className="video-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/76979871"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Vimeo video"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* /Services Section */}
    </>
  );
};

export default Services;

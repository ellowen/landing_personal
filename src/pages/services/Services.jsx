import React from 'react';

const Services = () => {
  // Array de videos con leyendas
  const videos = [
    {
      videoSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799433580&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      caption: 'Live at PDE - Warming up w/Eelke Kleijn',
    },
    {
      videoSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1826372976&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      caption: 'Live On Boat w/ Guy Gerber by Go for More',
    },
    {
      videoSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1826350071&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      caption: 'DJ Guest Metrodance',
    },
  ];

  return (
    <>
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Lasted Sets</h1>
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
            {/* Mapeamos los videos */}
            {videos.map((video, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="service-item position-relative">
                  {/* Embedding video */}
                  <div className="video-wrapper">
                    <iframe
                      width="100%"
                      height="300"
                      src={video.videoSrc}
                      title={`Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* Leyenda debajo del video */}
                  <h5 className="text-center mt-3">{video.caption}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Services Section */}
    </>
  );
};

export default Services;

import React from 'react';
import img from '/images/gigs/image.png';

const Resume = () => {
    const upcomingEvents = [
        {
            date: 'Sep 28, 2024',
            title: 'Kolektiv Studio Crobar',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Oct 25, 2024',
            title: 'Evolve, Muelle Costanera',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Nov 16, 2024',
            title: 'Great Sound Showcase, The Bow',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Sep 28, 2024',
            title: 'Kolektiv Studio Crobar',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Oct 25, 2024',
            title: 'Evolve, Muelle Costanera',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Nov 16, 2024',
            title: 'Great Sound Showcase, The Bow',
            location: 'Capital, Buenos Aires',
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
                                <h1>Next Gigs</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container"></div>
                </nav>
            </div>
            {/* End Page Title */}

            <section id="resume" className="events-section">
                <div className="container">
                    <div className="row">
                        {/* Columna de los eventos */}
                        <div className="col-lg-6">
                            <div className="events-list">
                                {upcomingEvents.map((event, index) => (
                                    <div className="event-item mb-4" key={index}>
                                        <div className="event-date">{event.date}</div>
                                        <div className="event-title">{event.title}</div>
                                        <div className="event-location">{event.location}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Columna de la imagen */}
                        <div className="col-lg-6">
                            <div className="image-container text-center">
                                <img
                                    src={img}
                                    alt="Event Poster"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Upcoming Gigs Section */}
        </>
    );
};

export default Resume;

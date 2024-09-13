import React from 'react';

const Events = () => {
    const upcomingEvents = [
        {
            title: 'Electronic Music Festival',
            date: 'October 15, 2024',
            location: 'Los Angeles, CA',
            description: 'Join us for an exciting festival featuring top electronic music artists from around the world.',
        },
        {
            title: 'Organic House Night',
            date: 'November 5, 2024',
            location: 'New York, NY',
            description: 'An evening dedicated to the best in organic house music with immersive soundscapes and live performances.',
        },
        {
            title: 'Progressive House Extravaganza',
            date: 'December 10, 2024',
            location: 'Miami, FL',
            description: 'Experience a night of progressive house beats with renowned DJs and stunning visual effects.',
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
                                <h1>Upcoming Events</h1>
                                <p className="mb-0">
                                    Stay tuned for our upcoming events where you can experience the best in electronic and organic house music.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="current">Upcoming Events</li>
                        </ol>
                    </div>
                </nav>
            </div>
            {/* End Page Title */}
            <section id="events" className="events section">
                <div className="container">
                    <div className="row">
                        {upcomingEvents.map((event, index) => (
                            <div className="col-lg-4" key={index} data-aos="fade-up" data-aos-delay={100 * index}>
                                <div className="event-item">
                                    <h3 className="event-title">{event.title}</h3>
                                    <p><strong>Date:</strong> {event.date}</p>
                                    <p><strong>Location:</strong> {event.location}</p>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* /Events Section */}
        </>
    );
}

export default Events;

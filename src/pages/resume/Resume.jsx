import React from 'react';

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
            <div  className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">

                                <h1 >Upcoming Gigs</h1>
                                {/* <p className="mb-0">
                                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                                    quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                                    dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                                    quaerat ipsum dolorem.
                                </p> */}

                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                    </div>
                </nav>
            </div>
            {/* End Page Title */}

            <section id='resume' className="events-section">
                <div className="container">

                    {/* <div className="events-header">
                        <h1>Upcoming Events</h1>
                        <p>Check out our upcoming events and join us for unforgettable experiences.</p>
                    </div> */}
                    <div className="events-list">
                        {upcomingEvents.map((event, index) => (
                            <div className="event-item" key={index}>
                                <div className="event-date">{event.date}</div>
                                <div className="event-title">{event.title}</div>
                                <div className="event-location">{event.location}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <div style={{ height: '200px' }}></div> */}
            {/* /Upcoming Gigs Section */}
        </>
    );
};

export default Resume;

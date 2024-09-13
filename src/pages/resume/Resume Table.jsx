import React from 'react';

const Resume = () => {
    return (
        <>
            {/* Page Title */}
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Upcoming Gigs</h1>
                                <p className="mb-0">
                                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                                    quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                                    dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                                    quaerat ipsum dolorem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        {/* <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="current">Resume</li>
                        </ol> */}
                    </div>
                </nav>
            </div>
            {/* End Page Title */}

            <section id="gigs" className="gigs section">
                <div className="container">
                    {/* <h3 className="gigs-title text-center mb-5">Upcoming Gigs</h3> */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <table className="table table-dark ">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Event</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Echoes of Nature Festival</td>
                                        <td>Buenos Aires, Argentina</td>
                                        <td>September 20, 2024</td>
                                    </tr>
                                    <tr>
                                        <td>Progressive Nights</td>
                                        <td>Santiago, Chile</td>
                                        <td>October 5, 2024</td>
                                    </tr>
                                    <tr>
                                        <td>Organic Beats Event</td>
                                        <td>Montevideo, Uruguay</td>
                                        <td>November 15, 2024</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Upcoming Gigs Section */}
        </>
    );
};

export default Resume;

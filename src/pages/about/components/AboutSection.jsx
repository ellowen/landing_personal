import React from 'react';
import img from '/images/about/NICOVITTO_12.jpg';

const AboutSection = () => {
    return (
        <>
            {/* Page Title */}
            <div  className="page-title" data-aos="fade">
                {/* <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 >About Me</h1>
                                <p className="mb-0">
                                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                                    quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                                    dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                                    quaerat ipsum dolorem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <nav   className="breadcrumbs">
                    <div className="container">
                        {/* <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="current">About</li>
                        </ol> */}
                    </div>
                </nav>
            </div>
            {/* End Page Title */}
            {/* About Section */}
            <section id="about" className="about section">
                
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src={img} className="img-fluid" alt="Profile Image" /* style={{ height: "80%" }} *//>
                        </div>
                        <div className="col-lg-8 content">
                            <h2>DJ/Producer</h2>
                            <p className="fst-italic py-3">
                                Nico Vitto nació en la zona norte de Buenos Aires y desde los 10 años descubrió su pasión por la música. A lo largo de su vida, ha explorado una variedad de géneros y se ha sumergido en el estudio de múltiples instrumentos musicales.
                            </p>
                            <p className="py-3">
                                En su búsqueda constante por crear melodías que transmitan equilibrio y organicidad, fundó su propio sello: <strong>Music for Balance</strong>, un nombre que encapsula su identidad artística.
                            </p>
                            <p className="py-3">
                                "Me inspira la capacidad de los sonidos orgánicos y grooveros para llevarnos a un estado de conexión emocional profunda, fusionando lo terrenal con lo espiritual."
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Nombre:</strong> <span>Nico Vitto</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Sello:</strong> <span>Music for Balance</span>
                                        </li>
                                        {/* <li>
                                            <i className="bi bi-chevron-right" /> <strong>Email:</strong>{" "}
                                            <span>nico@example.com</span>
                                        </li> */}
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Ubicación:</strong>{" "}
                                            <span>Buenos Aires, Argentina</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Edad:</strong>{" "}
                                            <span>34</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Géneros:</strong>{" "}
                                            <span>House, Organic House, Progressive House</span>
                                        </li>
                                        {/* <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Freelance:</strong> <span>Disponible</span>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /About Section */}
        </>
    );
}

export default AboutSection;

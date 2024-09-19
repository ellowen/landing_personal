import React from 'react'
import logo from '/images/booking/Great_Sound_Blanco.png'
const Contact = () => {
    return (
        <>
            {/* Page Title */}
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8 d-flex align-items-center justify-content-center">
                                {/* Dividimos el título en dos partes */}
                                <h1 className="d-flex align-items-center">
                                    <img
                                        src={logo}
                                        alt="Booking Agency Logo"
                                        style={{ width: '150px', height: '65px', margin: '0 10px' }}
                                    />
                                    <span className="me-5">Booking</span>
                                    {/* <span className="ms-2">Agency</span> */}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Booking Agency</h1>
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
                <nav className="breadcrumbs">
                    {/* <div className="container">
                        <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="current">Contact</li>
                        </ol>
                    </div> */}
                </nav>
            </div>
            {/* End Page Title */}
            {/* Contact Section */}
            <section id="contact" className="contact section">
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row gy-4">
                        <div className="col-md-6">
                            <div
                                className="info-item d-flex align-items-center"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <i className="icon bi bi-geo-alt flex-shrink-0" />
                                <div>
                                    <h3>Address</h3>
                                    <p>Buenos Aires, Argentina</p>
                                </div>
                            </div>
                        </div>
                        {/* End Info Item */}
                        <div className="col-md-6">
                            <div
                                className="info-item d-flex align-items-center"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <i className="icon bi bi-telephone flex-shrink-0" />
                                <div>
                                    <h3>Call Me</h3>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div>
                        </div>
                        {/* End Info Item */}
                        <div className="col-md-6">
                            <div
                                className="info-item d-flex align-items-center"
                                data-aos="fade-up"
                                data-aos-delay={400}
                            >
                                <i className="icon bi bi-envelope flex-shrink-0" />
                                <div>
                                    <h3>Email Us</h3>
                                    <p>info@greatsoundbooking.com</p>
                                </div>
                            </div>
                        </div>
                        {/* End Info Item */}
                        <div className="col-md-6">
                            <div
                                className="info-item d-flex align-items-center"
                                data-aos="fade-up"
                                data-aos-delay={500}
                            >
                                <i className="icon bi bi-share flex-shrink-0" />
                                <div>
                                    <h3>Social Profiles</h3>
                                    <div className="social-links">
                                        {/* <a href="#">
                                            <i className="bi bi-twitter-x" />
                                        </a>
                                        <a href="#">
                                            <i className="bi bi-facebook" />
                                        </a> */}
                                        <a href="https://www.instagram.com/greatsound.booking?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                            <i className="bi bi-instagram" />
                                        </a>
                                        {/* <a href="#">
                                            <i className="bi bi-skype" />
                                        </a>
                                        <a href="#">
                                            <i className="bi bi-linkedin" />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Info Item */}
                    </div>
                    {/* <form
                        action="forms/contact.php"
                        method="post"
                        className="php-email-form"
                        data-aos="fade-up"
                        data-aos-delay={600}
                    >
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Your Name"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 ">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Your Email"
                                    required=""
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    placeholder="Subject"
                                    required=""
                                />
                            </div>
                            <div className="col-md-12">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows={6}
                                    placeholder="Message"
                                    required=""
                                    defaultValue={""}
                                />
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                                <button type="submit">Send Message</button>
                            </div>
                        </div>
                    </form> */}
                    {/* End Contact Form */}
                </div>
            </section>
            {/* /Contact Section */}
        </>

    )
}

export default Contact
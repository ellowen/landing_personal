import React from 'react';
import img from '/images/about/technical-rider.jpg';

const SkillSection = () => {
    return (
        <>
            {/* Technical Rider Section */}
            <section id="technical-rider" className="technical-rider section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Technical Rider</h2>
                    <div>
                        <span>My</span> <span className="description-title">Technical Rider</span>
                    </div>
                </div>
                {/* End Section Title */}
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 d-flex justify-content-center">
                            <img src={img} className="img-fluid" alt="Technical Rider" />
                        </div>
                    </div>
                </div>
            </section>
            {/* /Technical Rider Section */}
        </>
    );
}

export default SkillSection;




// import React from 'react';
// import img from '/images/about/technical-rider.jpg';

// const SkillSection = () => {
//     return (
//         <>
//             {/* Technical Rider Section */}
//             <section id="technical-rider" className="technical-rider section">
//                 {/* Section Title */}
//                 <div className="container section-title" data-aos="fade-up">
//                     <h2>Technical Rider</h2>
//                     <div>
//                         <span>My</span> <span className="description-title">Technical Rider</span>
//                     </div>
//                 </div>
//                 {/* End Section Title */}
//                 <div className="container" data-aos="fade-up" data-aos-delay={100}>
//                     <div className="row justify-content-center">
//                         <div className="col-lg-6">
//                             <img src={img} className="img-fluid" alt="Technical Rider" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* /Technical Rider Section */}
//         </>
//     );
// }

// export default SkillSection;



// import React from 'react'

// const SkillSection = () => {
//     return (
//         <>
//             {/* Skills Section */}
//             <section id="skills" className="skills section">
//                 {/* Section Title */}
//                 <div className="container section-title" data-aos="fade-up">
//                     <h2>Skills</h2>
//                     <div>
//                         <span>My</span> <span className="description-title">Skills</span>
//                     </div>
//                 </div>
//                 {/* End Section Title */}
//                 <div className="container" data-aos="fade-up" data-aos-delay={100}>
//                     <div className="row skills-content skills-animation">
//                         <div className="col-lg-6">
//                             <div className="progress">
//                                 <span className="skill">
//                                     <span>HTML</span> <i className="val">100%</i>
//                                 </span>
//                                 <div className="progress-bar-wrap">
//                                     <div
//                                         className="progress-bar"
//                                         role="progressbar"
//                                         aria-valuenow={100}
//                                         aria-valuemin={0}
//                                         aria-valuemax={100}
//                                     />
//                                 </div>
//                             </div>
//                             {/* End Skills Item */}
//                             <div className="progress">
//                                 <span className="skill">
//                                     <span>CSS</span> <i className="val">90%</i>
//                                 </span>
//                                 <div className="progress-bar-wrap">
//                                     <div
//                                         className="progress-bar"
//                                         role="progressbar"
//                                         aria-valuenow={90}
//                                         aria-valuemin={0}
//                                         aria-valuemax={100}
//                                     />
//                                 </div>
//                             </div>
//                             {/* End Skills Item */}
//                             <div className="progress">
//                                 <span className="skill">
//                                     <span>JavaScript</span> <i className="val">75%</i>
//                                 </span>
//                                 <div className="progress-bar-wrap">
//                                     <div
//                                         className="progress-bar"
//                                         role="progressbar"
//                                         aria-valuenow={75}
//                                         aria-valuemin={0}
//                                         aria-valuemax={100}
//                                     />
//                                 </div>
//                             </div>
//                             {/* End Skills Item */}
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="progress">
//                                 <span className="skill">
//                                     <span>PHP</span> <i className="val">80%</i>
//                                 </span>
//                                 <div className="progress-bar-wrap">
//                                     <div
//                                         className="progress-bar"
//                                         role="progressbar"
//                                         aria-valuenow={80}
//                                         aria-valuemin={0}
//                                         aria-valuemax={100}
//                                     />
//                                 </div>
//                             </div>
//                             {/* End Skills Item */}
//                             <div className="progress">
//                                 <span className="skill">
//                                     <span>WordPress/CMS</span> <i className="val">90%</i>
//                                 </span>
//                                 <div className="progress-bar-wrap">
//                                     <div
//                                         className="progress-bar"
//                                         role="progressbar"
//                                         aria-valuenow={90}
//                                         aria-valuemin={0}
//                                         aria-valuemax={100}
//                                     />
//                                 </div>
//                             </div>
//                             {/* End Skills Item */}
//                             <div className="progress">
//                                 <span className="skill">
//                                     <span>Photoshop</span> <i className="val">55%</i>
//                                 </span>
//                                 <div className="progress-bar-wrap">
//                                     <div
//                                         className="progress-bar"
//                                         role="progressbar"
//                                         aria-valuenow={55}
//                                         aria-valuemin={0}
//                                         aria-valuemax={100}
//                                     />
//                                 </div>
//                             </div>
//                             {/* End Skills Item */}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* /Skills Section */}
//         </>

//     )
// }

// export default SkillSection
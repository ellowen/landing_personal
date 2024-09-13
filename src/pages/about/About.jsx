import React from 'react'
import { Title } from './components/Title';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import SkillSection from './components/SkillSection';
import InterestsSection from './components/InterestsSection';
// import TestimonialsSection from './components/TestimonialsSection';


const About = () => {
    return (
        <body className="about-page">
            <main className="main">
                <Title />
                <AboutSection />
                <StatsSection />
                <SkillSection />
                {/* <InterestsSection /> */}
                {/* <TestimonialsSection /> */}
            </main>
        </body>

    )
}

export default About
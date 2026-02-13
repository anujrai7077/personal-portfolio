import { motion } from 'framer-motion'
import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            I am a passionate developer with a strong foundation in web technologies.
                            I love creating applications that solve real-world problems and provide
                            delightful user experiences.
                        </p>
                        <p>
                            My journey in development started with curiosity and has grown into a
                            career where I continuously learn and adapt to new tools and frameworks.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About

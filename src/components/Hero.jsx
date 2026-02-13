import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import anujPhoto from '../assets/anuj photo.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Anuj Rai</h1>
                    <h2 className="role">Full Stack Developer</h2>
                    <p className="description">
                        I build accessible, pixel-perfect, and performant web experiences.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/anujrai7077" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/anuj-rai-a90106240" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                        <a href="mailto:anujrai7077@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer"><Mail size={24} /></a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="img-placeholder">
                        {/* Replace with actual image */}
                        <img src={anujPhoto} alt="Anuj Rai" className="hero-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero

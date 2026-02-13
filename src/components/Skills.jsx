import { motion } from 'framer-motion'
import './Skills.css'

const skills = [
    "Python", "HTML5", "CSS3",
    "JavaScript", "React js*",
    "Bootstrap", "MongoDB", "MY SQL", "Git Hub"
]

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            className="skill-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import './Experience.css'

const experiences = [
    {
        id: 1,
        role: "Software Developer Intern ",
        company: "Privacera.",
        date: " Nov 2024 - June 2025 ",
        description: (" Acquired hands-on experience with Python, React, JavaScript, CSS, and HTML.Contributed to an open-source project (PAIG OSS).Collaborated with team members to ensure responsive and user-friendly designs.")
    },
    {
        id: 2,
        role: "Web Developer Training",
        company: "Ministry of Railways, RDSO",
        date: "Jul 2023 - Aug 2023",
        description: ("Completed web development training . Worked on front-end design and basic backend logic.Practiced project collaboration using version control tools like Github.")
    }
]

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Experience
                </motion.h2>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="experience-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="experience-header">
                                <h3 className="role">{exp.role}</h3>
                                <span className="company">{exp.company}</span>
                            </div>

                            <div className="experience-date">
                                <Calendar size={16} />
                                <span>{exp.date}</span>
                            </div>

                            <p className="description">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience

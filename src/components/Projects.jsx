import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'
import './Projects.css'

const projects = [
    {
        title: "resume-builder",
        description: "A full-stack web application that helps users create professional resumes and discover relevant job opportunities based on their skills.",
        tags: ["Reactjs and Tailwind CSS", "python(Flask/fastAPI)", " RESTful API with separate frontend and backend servers"],
        links: { demo: "#", repo: "https://github.com/anujrai7077/resume-builder-and-job-recommender.git" }
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations and interactive UI.",
        tags: ["React.js", "Tailwind CSS", "Responsive Design"],
        links: { demo: "https://anuj-personal-portfolio.vercel.app/", repo: "https://github.com/anujrai7077/personal-portfolio.git" }
    },
    {
        title: "Trust3 AI",
        description: "Trust3 AI is an open-source project designed to protect Generative AI (GenAI) applications by ensuring security, safety, and observability. As the technologies and approaches for writing GenAI applications evolve rapidly, Trust3 AI offers a versatile framework that addresses the latest security and safety challenges and enables the integration of point security and safety solutions without requiring applications to be rewritten.",
        tags: ["Open Source", "GenAI Security", "Python"],
        links: { demo: "https://trust3.ai/", repo: "https://github.com/anujrai7077/paig.git" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="project-header">
                                <Folder size={40} className="folder-icon" />
                                <div className="project-links">
                                    <a href={project.links.repo} aria-label="GitHub Repo" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                                    <a href={project.links.demo} aria-label="Live Demo" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

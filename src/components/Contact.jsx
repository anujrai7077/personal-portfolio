import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                            I'm currently open to new opportunities. Whether you have a question or just want to say hi,
                            I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <a href="mailto:anujrai7077@gmail.com" target="_blank" rel="noopener noreferrer">anujrai7077@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <span>+91 6392246402</span>
                            </div>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>Lucknow, Uttar Pradesh</span>
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    )
}

export default Contact

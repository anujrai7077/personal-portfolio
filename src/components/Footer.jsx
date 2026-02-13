import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copyright">© {year} Anuj Rai. All rights reserved.</p>

                <div className="footer-socials">
                    <a href="https://github.com/anujrai7077" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/anuj-rai-a90106240" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    <a href="mailto:anujrai7077@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

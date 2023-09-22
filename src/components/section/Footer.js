import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/tiagoferrari_oliveira/' target='_blank'><AiOutlineInstagram size={30} /></a></li>
                <li><a href='https://github.com/tiagoferrari-projects/' target='_blank'><AiOutlineGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/tiago-projects/' target='_blank'><AiOutlineLinkedin size={30} /></a></li>
            </ul>
            <p>tiago-projects@outlook.com</p>
            <p>Tiago Ferrari © 2023</p>
        </div>
    )
}

export default Footer;
import styles from './Navbar.module.css';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return(
        <div className={styles.navbar}>
<ul>
    <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
    <li><Nav.Link href="#Skills">Habilidades</Nav.Link></li>
    <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
</ul>

<ul>
    <li><a href='https://www.instagram.com/tiagoferrari_oliveira/' target='_blank'><AiOutlineInstagram size={30}/></a></li>
    <li><a href='https://github.com/tiagoferrari-projects/' target='_blank'><AiOutlineGithub size={30}/></a></li>
    <li><a href='https://www.linkedin.com/in/tiago-projects/' target='_blank'><AiOutlineLinkedin size={30}/></a></li>
</ul>
        </div>
    )
}

export default Navbar;
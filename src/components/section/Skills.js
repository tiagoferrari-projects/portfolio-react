import styles from './Skills.module.css';
import javascript from '../../img/skills/javascript.svg'
import html from '../../img/skills/html.svg'
import css from '../../img/skills/css.svg'
import react from '../../img/skills/react.svg'
import typescript from '../../img/skills/typescript.svg'

function Skills(){
    return (
        <div className={styles.skill} id='skill'>
            <h1>Habilidades</h1>
            <h4>Conheça um pouco das minhas principais habilidades e conhecimentos.</h4>
            <div>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={typescript}></img>
            </div>
        </div>
    )
}

export default Skills;
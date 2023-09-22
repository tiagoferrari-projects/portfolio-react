import styles from './Projects.module.css'
import Card from './elements/Card'
import lpdnc from '../../img/projetos/lpdnc.svg'
import portfolio from '../../img/projetos/portfolio.svg'

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
                image={lpdnc}
                title={"LP - DNC"}
                technology={"HTML, CSS e JS"}
                description={""}
                repository={""}
                site={""} />
            <Card
                image={lpdnc}
                title={"Portfólio - DNC"}
                technology={"HTML, CSS, JS e REACT"}
                description={""}
                repository={""}
                site={""} />
        </div>
    )
}

export default Projects;
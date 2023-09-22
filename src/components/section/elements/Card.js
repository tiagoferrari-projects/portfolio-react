import styles from './Card.module.css'
import ButtonB from './ButtonB';

function Card({image, title, technology, description, repository, site}) {
    return (
        <div className={styles.card} > 
          <a href={site}>
            <img src={image}/>
          </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias: </strong>{technology}</p>
                <p>{description}</p>
                <ButtonB text={'Acesse o repositório'} link={repository}/>
            </section>
        </div>
    )
}

export default Card;
import styles from './Note.module.css'

function Note(props) {
    return(
        <div className={styles.note}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.descriptions}>{props.description}</p>
        </div>
    )
}

export default Note
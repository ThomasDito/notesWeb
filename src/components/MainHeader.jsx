import { MdPostAdd, MdMessage } from 'react-icons/md'
import styles from './MainHeader.module.css'

function MainHeader(props) {
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <MdMessage />
                React Note
            </h1>
            <button className={styles.button} onClick={props.onCreatePost}>
                <MdPostAdd size={18} />
                New Note
            </button>
        </header>
    )
}

export default MainHeader
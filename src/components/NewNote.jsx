import { useState } from 'react'
import styles from './NewNote.module.css'

function NewNote(props) {
    const[stateTitle, setStateTitle] = useState('')
    const[stateDescriptions, setStateDescriptions] = useState('')

    function titleChangeHanler(event) {
        setStateTitle(event.target.value)
    }

    function descriptionsChangeHandler(event) {
        setStateDescriptions(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        const noteData = {
            title: stateTitle,
            descriptions: stateDescriptions
        }
        props.onAddNote(noteData)
        props.onCancelModal()
    }

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' required onChange={titleChangeHanler} />
            </p>
            <p>
                <label htmlFor="descriptions">Descriptions</label>
                <textarea id='descriptions' required rows={3} onChange={descriptionsChangeHandler} />
            </p>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancelModal}>Cancel</button>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default NewNote
import { useState } from "react";
import Note from "../components/Note";
import styles from "./Notes.module.css";
import NewNote from "../components/NewNote";
import Modal from "../components/Modal";

function Notes(props) {
    const [notes, setNotes] = useState([]);

    function addNoteHandler(noteData) {
    setNotes((notes) => [noteData, ...notes]);
    }

    return (
        <div>
            {props.modalToggle && (
                <Modal>
                <NewNote
                    onCancelModal={props.cancelModal}
                    onAddNote={addNoteHandler}
                />
                </Modal>
            )}


            <ul className={styles.notes}>
                {notes.map((note) => (
                <Note title={note.title} description={note.descriptions} />
                ))}
            </ul>
        </div>
    );
}

export default Notes;

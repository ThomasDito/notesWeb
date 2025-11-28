import { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import MainHeader from "./components/mainHeader";
import Note from "./components/Note";

function App() {
  const [modalToggleState, setModalToggle] = useState(false);

  function showModalHandler() {
    setModalToggle(true);
  }

  function hideModalHandler() {
    setModalToggle(false);
  }

  return (
    <div>
      <MainHeader onCreatePost={showModalHandler} />
      <div>
        <Notes modalToggle={modalToggleState} cancelModal={hideModalHandler} />
      </div>
    </div>
  );
}

export default App;

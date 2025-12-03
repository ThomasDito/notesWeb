import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import MainHeader from "./components/mainHeader";
import NotFound from "./pages/NotFound";

function App() {
  const [modalToggleState, setModalToggle] = useState(false);

  function showModalHandler() {
    setModalToggle(true);
  }

  function hideModalHandler() {
    setModalToggle(false);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <MainHeader onCreatePost={showModalHandler} />
            <div>
              <Notes modalToggle={modalToggleState} cancelModal={hideModalHandler} />
            </div>
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

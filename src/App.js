import { useState } from "react";
import { Modal } from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import "./index.css";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button className="modalBtn" onClick={() => setOpenModal(true)}>
        Open Modal
      </button>
      <AnimatePresence>
        {openModal && (
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

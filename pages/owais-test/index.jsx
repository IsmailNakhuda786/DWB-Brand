import React from "react";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import ContactFormModal from "../../components/ContactFormModal/ContactFormModal";

const index = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <div>
      <button onClick={() => setModal(true)}>open</button>
      <Modal modal={modal} setModal={setModal}>
        <ContactFormModal />
      </Modal>
    </div>
  );
};

export default index;

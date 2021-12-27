import Form from "../Form/Form";
import style from "./ContactFormModal.module.scss";

const ContactFormModal = () => {
  return (
    <div className={style.contactFormMain}>
      <Form heading={"Get in touch"} buttonText={"Submit"} />
    </div>
  );
};

export default ContactFormModal;

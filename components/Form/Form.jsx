import { useState } from "react";
import { validateEmail, validatePhone } from "../../utils/Data/helpers";
import Button from "../Button/Button";
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import Paragraph from "../Paragraph/Paragraph";
import TextArea from "../TextArea/TextArea";
import classList from "./Form.module.scss";

const Form = ({ heading, description, buttonText, className }) => {
  // Input hanlders
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Error hanlders
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [messageErr, setMessageErr] = useState("");

  const validateForm = () => {
    if (!name) {
      setNameErr("Please enter your name");
      return false;
    } else if (!email) {
      setNameErr(" ");
      setEmailErr("Please enter your email");
      return false;
    } else if (!phone) {
      setNameErr(" ");
      setEmailErr(" ");
      setPhoneErr("Please enter your phone number");
      return false;
    } else if (!message) {
      setNameErr(" ");
      setEmailErr(" ");
      setPhoneErr(" ");
      setMessageErr("Please enter your message");
      return false;
    } else if (!validateEmail(email)) {
      setNameErr(" ");
      setMessageErr(" ");
      setPhoneErr(" ");
      setEmailErr("Please enter valid email");
      return false;
    } else if (!validatePhone(phone)) {
      setNameErr(" ");
      setMessageErr(" ");
      setEmailErr(" ");
      setPhoneErr("Please enter valid phone number");
      return false;
    } else {
      setNameErr(" ");
      setMessageErr(" ");
      setEmailErr(" ");
      setPhoneErr(" ");
      return true;
    }
  };

  const submitFormHanlder = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("VALUES", name, email, phone, message);
    }
  };
  console.log("ERRORS", nameErr, emailErr, phoneErr, messageErr);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  return (
    <>
      <form className={`${classList.formWidth} ${className}`}>
        <Header>{heading}</Header>
        {description && <Paragraph marginBottom="30">{description}</Paragraph>}
        <InputField
          value={name}
          onChange={(e) => inputChangeHandler(e)}
          name="name"
          fieldName={"Full Name"}
          errorMessage={nameErr}
        />
        <InputField
          type="email"
          value={email}
          onChange={(e) => inputChangeHandler(e)}
          name="email"
          fieldName={"Email"}
          errorMessage={emailErr}
        />
        <InputField
          type="tel"
          value={phone}
          onChange={(e) => inputChangeHandler(e)}
          name="phone"
          fieldName={"Phone No."}
          errorMessage={phoneErr}
        />
        <TextArea
          type="text"
          value={message}
          onChange={(e) => inputChangeHandler(e)}
          name="message"
          fieldName={"Project Description"}
          errorMessage={messageErr}
        />
        <Button
          onClick={submitFormHanlder}
          htmlType="submit"
          color="white"
          style={{ marginBottom: "0px", marginTop: "20px" }}>
          {buttonText}
        </Button>
      </form>
    </>
  );
};

export default Form;

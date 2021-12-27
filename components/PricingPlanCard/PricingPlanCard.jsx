import React from "react";
import classList from "./PricingPlanCard.module.scss";
import phone from "../../assets/images/icons/phone.svg";
import chat from "../../assets/images/icons/chat.svg";
import Paragraph from "../../components/Paragraph/Paragraph";
import Header from "../Header/Header";
import Button from "../../components/Button/Button";
import Modal from "../Modal/Modal";
import ContactFormModal from "../ContactFormModal/ContactFormModal";

const PricingPlanCard = ({
  children,
  title,
  backgroundColor = "white",
  amount,
  status,
  netAmount,
}) => {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <div className={`${classList.pricingCard} ${backgroundColor}`}>
        <div className={classList.wrapperTitle}>
          <Header color="white" style={{ margin: "0px" }}>
            {title}
          </Header>
          {/* <h1 className={classList.title}></h1> */}
        </div>
        <div className={classList.wrapperAmount}>
          <Paragraph color="#00000042" className={classList.amount}>
            {amount}
          </Paragraph>
          <Header fontWeight="bold" style={{ marginBottom: "6px" }}>
            {netAmount}
          </Header>
          <Paragraph style={{ margin: "0px" }}>{status}</Paragraph>
        </div>
        <div className={classList.borders}>
          <div className={classList.list}>{children}</div>
        </div>
        <div className={classList.description}>
          <Paragraph style={{ marginBottom: "15px" }}>
            Add on: $100 for 25 Minutes Rush Delivery
          </Paragraph>
          <Button
            onClick={() => setModal(true)}
            backgroundColor={"#05aff2"}
            color="white">
            Order now
          </Button>
          <Paragraph
            color="#0476d9"
            style={{ marginBottom: "0px" }}
            className={classList.detail}>
            View Details
          </Paragraph>
        </div>
        <div className={classList.contact}>
          <Paragraph className={classList.contactAlign}>
            <img src={phone.src} alt="" />
            +2834292384
          </Paragraph>
          <Paragraph className={classList.contactAlign}>
            <img src={chat.src} alt="" />
            Live Chat
          </Paragraph>
        </div>
        <Modal modal={modal} setModal={setModal}>
          <ContactFormModal />
        </Modal>
      </div>
    </>
  );
};

export default PricingPlanCard;

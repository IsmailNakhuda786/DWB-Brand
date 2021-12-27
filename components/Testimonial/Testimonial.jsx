import classList from "./Testimonial.module.scss";

import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

const Testimonial = ({ profilePhoto, title, clientName, status, children }) => {
  return (
    <>
      <div>
        <div className={classList.testimonialMain}>
          <div className={classList.content}>
            <Header>{title}</Header>
            <img src={profilePhoto?.src} alt="" />
            <Paragraph>{children}</Paragraph>
            <Header>{clientName}</Header>
            <Paragraph>{status}</Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

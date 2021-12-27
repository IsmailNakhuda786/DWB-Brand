import Button from "../Button/Button";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import UsableRow from "../useAbleRow/UsableRow";
import classList from "./WebsiteServices.module.scss";
import bg from "../../assets/images/sample/bg.svg";

const WebsiteServics = () => {
  return (
    <>
      <Section background={`url(${bg.src})`}>
        <div className={classList.IAmHome}>
          <div className={classList.content}>
            <Header color="white" fontWeight={"bold"}>
              #1 Website Development Services
            </Header>
            <Paragraph color="white">
              Digital Website Builder makes use of collaborative efforts to give
              you a good website development services
            </Paragraph>
            <Header
              color="white"
              fontWeight={"bold"}
              className={classList.borderHeading}>
              Leading Website Development Agency
            </Header>
            <Paragraph color="white">
              Build a dynamic and robust digital presence by utilizing
              sophisticated platforms and technologies. Being an agile website
              development company, we work with a wide range of clients to
              generate results-driven web development products for a variety of
              sectors.
            </Paragraph>
            <Paragraph color="white">
              Our professional and experienced unit of web developer personnel
              work across diverse fields to develop solutions that help our
              clients move their businesses forward and compete with the best in
              their fields.
            </Paragraph>
            <Button style={{ background: "white", marginTop: "35px" }}>
              Get Started
            </Button>
          </div>
          <div className={classList.formPanel}>
            <div className={classList.formBackColor}>
              <Form
                description={""}
                heading={"Get In Touch"}
                buttonText={"Send Message"}
                className={classList.formHeading}
              />
              <Paragraph color="white" className={classList.OfferTime}>
                Limited Time Offer
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WebsiteServics;

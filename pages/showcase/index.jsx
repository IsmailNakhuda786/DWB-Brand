import Carousel from "../../components/Carousel/Carousel";
import Section from "../../components/Section/Section";
import ShowCase from "../../components/ShowCase/ShowCase";
import Testimonial from "../../components/Testimonial/Testimonial";
import quotesLeft from "../../assets/images/icons/quotesLeft.svg";
import quotesRight from "../../assets/images/icons/quotesRight.svg";
import profile from "../../assets/images/sample/profile.svg";
import getInTouch from "../../assets/images/sample/getInTouch.svg";
import classList from "./index.module.scss";
import UsableRow from "../../components/useAbleRow/UsableRow";
import Form from "../../components/Form/Form";

const index = () => {
  return (
    <>
      <Section background={"#05aff2"}>
        <ShowCase />
      </Section>
      <Section background="#8080801a">
        <div className={classList.testimonial_wrapper}>
          <img className={classList.quotesLeft} src={quotesLeft.src} alt="" />
          <img className={classList.quotesRight} src={quotesRight.src} alt="" />
          <Carousel autoplay={true} speed={800}>
            <Testimonial
              clientName={"Sheree Derouen"}
              status={"Customer"}
              profilePhoto={profile}
              title={"Client Testinomial"}>
              Extreamly proffessional, creative, and experienced group of people
              that have a keen eye for perfaction, I am usually a very pick
              person who isn’t normally satisfied with the norms. These guys are
              great
            </Testimonial>
            <Testimonial
              clientName={"Sheree Derouen"}
              status={"Customer"}
              profilePhoto={profile}
              title={"Client Testinomial"}>
              Extreamly proffessional, creative, and experienced group of people
              that have a keen eye for perfaction, I am usually a very pick
              person who isn’t normally satisfied with the norms. These guys are
              great
            </Testimonial>
          </Carousel>
        </div>
      </Section>
      <Section>
        <UsableRow image={getInTouch} reverse imageClass={classList.imageClass}>
          <Form
            heading={"Get In Touch"}
            buttonText={"Send Message"}
            description={
              "Hit us up for the best services at an afforable price! Fill out the form below and we’ll surely contact you."
            }
          />
        </UsableRow>
      </Section>
    </>
  );
};

export default index;

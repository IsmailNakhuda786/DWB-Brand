import classList from "./AnimatedServiceCard.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
const AnimatedServiceCard = (props) => {
  const {
    title = "Tesla Love",
    icon = "https://primedesignagency.com/assets/images/expertise/website-development/responsive-design.svg",
    content = "Lorem ipsum dolor sit amer consenter adipisicing elite. Distinction necessitating molestiae quasi",
  } = props;
  return (
    <div className={classList.animated_card_wrapper}>
      <div className={classList.box_content}>
        <Paragraph color="#fff">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          necessitatibus molestiae quasi
        </Paragraph>
      </div>
      <div className={classList.animate_step_up}>
        <img
          src="https://primedesignagency.com/assets/images/expertise/website-development/responsive-design.svg"
          alt=""
        />
        <Header
          customClass={classList.animate_heading}
          color="#fff"
          variant="h2">
          Tesla Love
        </Header>
      </div>
    </div>
  );
};

export default AnimatedServiceCard;

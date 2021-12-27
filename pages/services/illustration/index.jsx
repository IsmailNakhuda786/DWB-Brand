import Button from "../../../components/Button/Button";
import Carousel from "../../../components/Carousel/Carousel";
import Form from "../../../components/Form/Form";
import Header from "../../../components/Header/Header";
import HomeContents from "../../../components/HomeContents/HomeContents";
import MarketingCard from "../../../components/MarketingCard/MarketingCard";
import MarketingPanel from "../../../components/MarketingPanel/MarketingPanel";
import PricingSection from "../../../components/PricingSection/PricingSection";
import Section from "../../../components/Section/Section";
import ShowCase from "../../../components/ShowCase/ShowCase";
import Testimonial from "../../../components/Testimonial/Testimonial";
import UsableRow from "../../../components/useAbleRow/UsableRow";
import WebsiteServics from "../../../components/WebsiteServices/WebsiteServics";
import guranti from "../../../assets/images/icons/guranti.svg";
import award from "../../../assets/images/icons/award.svg";
import customerSupport from "../../../assets/images/icons/customerSupport.svg";
import uniqueDesign from "../../../assets/images/icons/uniqueDesign.svg";
import unlimitedRevisions from "../../../assets/images/icons/unlimitedRevisions.svg";
import profile from "../../../assets/images/sample/profile.svg";
import getInTouch from "../../../assets/images/sample/getInTouch.svg";
import quotesRight from "../../../assets/images/icons/quotesRight.svg";
import quotesLeft from "../../../assets/images/icons/quotesLeft.svg";
import classList from "./index.module.scss";
import WebPresence from "../../../components/WebPresence/WebPresence";
import Paragraph from "../../../components/Paragraph/Paragraph";
import LogoSlider from "../../../components/LogoSlider/LogoSlider";
const index = () => {
  return (
    <>
      <WebsiteServics />
      <Section>
        <div className={classList.marketingSection}>
          <MarketingCard
            content={"100% Satisfaction"}
            icon={guranti}
            backgroundColor={"#C240DD"}
          />
          <MarketingCard
            content={"Unique Design Guarantee"}
            icon={uniqueDesign}
            backgroundColor={"#FF8F79"}
          />
          <MarketingCard
            content={"Unlimited Revisions"}
            icon={unlimitedRevisions}
            backgroundColor={"#4876FF"}
          />
          <MarketingCard
            content={"24/7 Customer Support"}
            icon={customerSupport}
            backgroundColor={"#15DD94"}
          />
          <MarketingCard
            content={"Award Winning Team"}
            icon={award}
            backgroundColor={"#B30E71"}
          />
        </div>
      </Section>
      <Section>
        <WebPresence />
      </Section>
      <Section>
        <div className={classList.contents}>
          <HomeContents
            headings="Creative web development studio"
            showButton={true}>
            <Paragraph customClass={classList.paragraph}>
              Experience pure creativity, skill, and expertise in Technologies
              for Web Development with our website agency. Build a thriving web
              presence with programming tools like Python, Angular, React
              Native, and renowned cloud services with creative web development
              experts who formulate customized solutions.
            </Paragraph>
          </HomeContents>
        </div>
      </Section>
      <PricingSection />
      <Section padding="0px" flex={true}>
        <MarketingPanel />
      </Section>
      <Section flex={true} padding="0px">
        <UsableRow
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Header
            style={{
              borderBottom: "2px solid black",
              width: "fit-content",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}>
            We provide quality solutions for clients
          </Header>
          <Paragraph style={{ marginBottom: "25px" }}>
            Hungry but tired? Need an ingredient but busy with something? Our
            Food Delivery system is here to help you with last-minute recipe
            ingredients and food. Simply choose the desired restaurant or
            grocery store, place the order and let our self-sufficient delivery
            management system take it from there. Enjoy food and grocery at your
            doorsteps with minimum delivery charges.
          </Paragraph>
          <Button color="white">Get Started</Button>
        </UsableRow>
      </Section>

      <Section>
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
      <Section
        background="#e8eff8"
        flex={true}
        autoPlay={true}
        swipeable={true}>
        <LogoSlider />
      </Section>
      <Section background={"#05aff2"}>
        <ShowCase />
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

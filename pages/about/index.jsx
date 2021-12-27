import Carousel from "../../components/Carousel/Carousel";
import Section from "../../components/Section/Section";
import Testimonial from "../../components/Testimonial/Testimonial";
import quotesLeft from "../../assets/images/icons/quotesLeft.svg";
import quotesRight from "../../assets/images/icons/quotesRight.svg";
import profile from "../../assets/images/sample/profile.svg";
import getInTouch from "../../assets/images/sample/getInTouch.svg";
import bgTestimonial from "../../assets/images/sample/bgTestimonial.png";
import classList from "./index.module.scss";
import MultiSlider from "../../components/MultiSlider/MultiSlider";
import foodchoo from "../../assets/images/logo/foodChoo.svg";
import jobsmideast from "../../assets/images/logo/jobsmideast.svg";
import click from "../../assets/images/logo/click.svg";
import clickTeam from "../../assets/images/logo/clickTeam.svg";
import homeOwner from "../../assets/images/logo/homeOwner.svg";
import miprotector from "../../assets/images/logo/miprotector.svg";
import neighBiz from "../../assets/images/logo/neighBiz.svg";
import pakGo from "../../assets/images/logo/pakGo.svg";
import pennyPunch from "../../assets/images/logo/pennyPunch.svg";
import quickDelivery from "../../assets/images/logo/quickDelivery.svg";
import roadex from "../../assets/images/logo/roadex.svg";
import urbxn from "../../assets/images/logo/urbxn.svg";
import sample4 from "../../assets/images/sample/sample4.svg";
import guranti from "../../assets/images/icons/guranti.svg";
import award from "../../assets/images/icons/award.svg";
import customerSupport from "../../assets/images/icons/customerSupport.svg";
import uniqueDesign from "../../assets/images/icons/uniqueDesign.svg";
import unlimitedRevisions from "../../assets/images/icons/unlimitedRevisions.svg";
import UsableRow from "../../components/useAbleRow/UsableRow";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import MarketingCard from "../../components/MarketingCard/MarketingCard";
import AboutMainView from "../../components/AboutMainView/AboutMainView";

const index = () => {
  const images = [
    foodchoo,
    jobsmideast,
    click,
    clickTeam,
    homeOwner,
    miprotector,
    neighBiz,
    pakGo,
    pennyPunch,
    quickDelivery,
    roadex,
    urbxn,
  ];
  return (
    <>
      <Section>
        <AboutMainView />
      </Section>
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
      <Section flex={true} padding="0px">
        <UsableRow
          gridGapClass={classList.gridGapClass}
          image={sample4}
          backgroundColor={"#1D2228"}
          customClass={classList.contentSection}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Header
            color="white"
            style={{
              borderBottom: "2px solid white",
              width: "fit-content",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}>
            Our Philosophy
          </Header>
          <Paragraph color="#ffffff5e" style={{ marginBottom: "25px" }}>
            Affronting discretion as do is announcing. Now months esteem oppose
            nearer enable too six. She numerous unlocked you perceive speedily.
            Affixed offence spirits or ye of offices between.
          </Paragraph>
          <Paragraph
            color="#ffffff5e"
            style={{ borderLeft: "3px solid white", paddingLeft: "15px" }}>
            Book My Websites’s design, marketing and strategic development team
            relentlessly pursues customer value creation and satisfaction.
            Against this backdrop, our designers, digital marketers and
            developers go every length to deliver our clientele exceptional
            service level. To lend countenance, Steve Jobs once said,
          </Paragraph>
        </UsableRow>
      </Section>
      <Section background="#8080801a">
        {/* background={`url(${bgTestimonial.src})`} */}
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
        <MultiSlider autoPlay={true} showDots={false} images={images} />
      </Section>
    </>
  );
};

export default index;

import Section from "../components/Section/Section";
import classList from "./index.module.scss";
import MarketingCard from "../components/MarketingCard/MarketingCard";
import WebPresence from "../components/WebPresence/WebPresence";
import HomeContents from "../components/HomeContents/HomeContents";
import UsableRow from "../components/useAbleRow/UsableRow";
import Paragraph from "../components/Paragraph/Paragraph";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Testimonial from "../components/Testimonial/Testimonial";
import ShowCase from "../components/ShowCase/ShowCase";
import Form from "../components/Form/Form";
import PricingSection from "../components/PricingSection/PricingSection";
import Carousel from "../components/Carousel/Carousel";
import MarketingPanel from "../components/MarketingPanel/MarketingPanel";
import guranti from "../assets/images/icons/guranti.svg";
import award from "../assets/images/icons/award.svg";
import customerSupport from "../assets/images/icons/customerSupport.svg";
import uniqueDesign from "../assets/images/icons/uniqueDesign.svg";
import unlimitedRevisions from "../assets/images/icons/unlimitedRevisions.svg";
import profile from "../assets/images/sample/profile.svg";
import getInTouch from "../assets/images/sample/getInTouch.svg";
import quotesRight from "../assets/images/icons/quotesRight.svg";
import quotesLeft from "../assets/images/icons/quotesLeft.svg";
import websiteGif from "../assets/images/icons/websiteGif.gif";
import MainBanner from "../components/MainBanner/MainBanner";
import Statistics from "../components/Statistics/Statistics";
import ListItem from "../components/ListItem/ListItem";
import LogoSlider from "../components/LogoSlider/LogoSlider";
import Award from "../components/Award/Award";
import BookMyWebsite from "../components/BookMyWebsite/BookMyWebsite";

const index = () => {
  return (
    <>
      <MainBanner />

      <Section background="#05AFF2">
        <div className={classList.statisticsMain}>
          <Statistics count={300} title="Happy Customers" />
          <Statistics
            countingDuration={150}
            count={8}
            title="Projects Completed"
          />
          <Statistics
            countingDuration={30}
            count={89}
            title="Lounched Products"
          />
          <Statistics
            countingDuration={150}
            count={13}
            title="Years of Experience"
            more="+"
          />
        </div>
      </Section>
      <Section flex={true} background="black" padding="20px 0px;">
        <Award />
      </Section>
      <Section>
        <UsableRow
          reverse
          image={websiteGif}
          imageClass={classList.imageClass}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Header fontWeight="bold">
            Get A Creative Website Design In Just $229.99 You’ll Love It.
          </Header>
          <Paragraph>
            Bookmywebsites can help visualize even the craziest ideas converting
            them into professional designs, awesome experiences, and catchy
            brands.
          </Paragraph>
          <ListItem content={"Dozens of design concepts to explore"} />
          <ListItem content={"Deliver the website in just hours"} />
          <ListItem content={"100% money-back guarantee"} />
          <Button color="white" style={{ marginTop: "15px" }}>
            Lets Get Started
          </Button>
        </UsableRow>
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
      <BookMyWebsite />
      <Section>
        <UsableRow
          image={getInTouch}
          reverse
          imageClass={classList.imageClass}
          gridGapClass={classList.getInTouchGap}>
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

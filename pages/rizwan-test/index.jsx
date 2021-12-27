import AboutMainView from "../../components/AboutMainView/AboutMainView";
import MarketingCard from "../../components/MarketingCard/MarketingCard";
import guranti from "../../assets/images/icons/guranti.svg";
import award from "../../assets/images/icons/award.svg";
import customerSupport from "../../assets/images/icons/customerSupport.svg";
import uniqueDesign from "../../assets/images/icons/uniqueDesign.svg";
import unlimitedRevisions from "../../assets/images/icons/unlimitedRevisions.svg";
import UsableRow from "../../components/useAbleRow/UsableRow";
import sample3 from "../../assets/images/sample/sample2.svg";
import getInTouch from "../../assets/images/sample/getInTouch.svg";
import Header from "../../components/Header/Header";
import PricingPlanCard from "../../components/PricingPlanCard/PricingPlanCard";
import ListItem from "../../components/ListItem/ListItem";
import Paragraph from "../../components/Paragraph/Paragraph";
import InputField from "../../components/InputField/InputField";
import TextArea from "../../components/TextArea/TextArea";
import Form from "../../components/Form/Form";
import ShowCase from "../../components/ShowCase/ShowCase";
import Testimonial from "../../components/Testimonial/Testimonial";
import profile from "../../assets/images/sample/profile.svg";
import MarketingPanel from "../../components/MarketingPanel/MarketingPanel";
import WebsiteServics from "../../components/WebsiteServices/WebsiteServics";
import WebPresence from "../../components/WebPresence/WebPresence";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import websiteGif from "../../assets/images/icons/websiteGif.gif";
import BookMyWebsite from "../../components/BookMyWebsite/BookMyWebsite";

const index = () => {
  return (
    <Section>
      <BookMyWebsite />
      <AboutMainView />
      <UsableRow
        reverse
        image={websiteGif}
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
        <Button color="white">Lets Get Started</Button>
      </UsableRow>
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
      <UsableRow
        image={sample3}
        backgroundColor={"#1D2228"}
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
          relentlessly pursues customer value creation and satisfaction. Against
          this backdrop, our designers, digital marketers and developers go
          every length to deliver our clientele exceptional service level. To
          lend countenance, Steve Jobs once said,
        </Paragraph>
      </UsableRow>
      <PricingPlanCard
        amount={"$120"}
        netAmount={"$29.99"}
        title={"Basic"}
        status={"Payable Amount"}>
        <ListItem content={"3 Custom Logo Design Concepts"} />
        <ListItem content={"1 Dedicated Designer"} />
        <ListItem content={"1 Revision  "} />
        <ListItem content={"1 Revision  "} />
        <ListItem content={"1 Revision  "} />
        <ListItem content={"1 Revision  "} />
        <ListItem content={"1 Revision  "} />
        <ListItem content={"Get Initial Sample Within 1 Hour"} />
      </PricingPlanCard>
      <InputField fieldName={"Full Name"} />
      <TextArea fieldName={"Description"} />
      <Form
        heading={"Get In Touch"}
        description={
          "Hit us up for the best services at an afforable price! Fill out the form below and we’ll surely contact you."
        }
      />
      <UsableRow image={getInTouch} reverse>
        <Form
          heading={"Get In Touch"}
          buttonText={"Send Message"}
          description={
            "Hit us up for the best services at an afforable price! Fill out the form below and we’ll surely contact you."
          }
        />
      </UsableRow>
      <ShowCase />
      <Testimonial
        clientName={"Sheree Derouen"}
        status={"Customer"}
        profilePhoto={profile}
        title={"Client Testinomial"}>
        Extreamly proffessional, creative, and experienced group of people that
        have a keen eye for perfaction, I am usually a very pick person who
        isn’t normally satisfied with the norms. These guys are great
      </Testimonial>
      <MarketingPanel />
      <WebsiteServics />
      <WebPresence />
    </Section>
  );
};

export default index;

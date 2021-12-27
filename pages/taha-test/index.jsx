import Contact_Card from "../../components/Contact_Card/Contact_Card";
import classList from "./index.module.scss";
import Email from "./../../assets/images/1.png";
import Phone from "./../../assets/images/2.png";
import Location from "./../../assets/images/3.png";
import Footer from "../../components/Footer/Footer";
import Stats from "../../components/Stats/Stats";
import HomeContents from "../../components/HomeContents/HomeContents";

const index = () => {
  return (
    <div>
      <div className={classList.contact}>
        <Contact_Card icon={Email.src} heading="Email Address">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem
          debitis animi nobis veniam excepturi!
        </Contact_Card>
        <Contact_Card icon={Phone.src} heading="Phone">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem
          debitis animi nobis veniam excepturi!
        </Contact_Card>
        <Contact_Card icon={Location.src} heading="Location">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem
          debitis animi nobis veniam excepturi!
        </Contact_Card>
      </div>

      <div className={classList.projects}>
        <Stats numbers="3755" content="Happy Customers" />
        <Stats numbers="5687" content="Projects Completed" />
        <Stats numbers="5201" content="Launched Products" />
        <Stats numbers="13+" content="Years of Experience" />
      </div>
      
      <div className={classList.contents}>
        <HomeContents
          headings="Creative web development studio"
          para="Experience pure creativity, skill, and expertise in Technologies for Web Development with our website agency. Build a thriving web presence with programming tools like Python, Angular, React Native, and renowned cloud services with creative web development experts who formulate customized solutions."
          showButton={true}
        />
        <HomeContents
          showButton={false}
          headings="Services we Offer"
          para="Our website agency can help diverse clientele build result-driven web development products for different industries, namely: "
        />
      </div>

      <div className={classList.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default index;

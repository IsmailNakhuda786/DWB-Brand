import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Section from "../../components/Section/Section";
import classList from "./index.module.css";
// import Paragraph from "../../components/Paragraph/Paragraph"
import ImageComponent from './../../components/ImageComponent/ImageComponent'
import img1 from "./../../assets/images/eCommerceWebsites/bags.jpg";
import img2 from "./../../assets/images/eCommerceWebsites/bakery.jpg";
import img3 from "./../../assets/images/eCommerceWebsites/commerce.jpg";
import img4 from "./../../assets/images/eCommerceWebsites/autoParts.jpg";

// const ImageContainer = ({ img, layout = "fill", objectFit = "cover", objectPosition  }) => (
//   <div className={classList.imageContainer}>
//     <Image src={img} layout="fill" objectFit="contain" />
//   </div>
// );

const index = () => {
  return (
    <div className={classList.container}>
      {/* <h1>MAK Testing</h1> */}
      <ImageComponent img={img1} />
      <ImageComponent img={img2} />
      <ImageComponent img={img3} />
      <ImageComponent img={img4} />
      {/* <Paragraph color="red">my random para 1</Paragraph>
      <Paragraph color="green">my random para 2</Paragraph>
      <Paragraph>my random para 3</Paragraph>
      <Header variant="h5">Random Header 1</Header>
      <Header variant="h3">Random Header 2</Header>
      <Header variant="h1">Random Header 2</Header>
      <Button color="white">Press</Button>
      <Section>
        <h1>ABC</h1>
      </Section> */}
    </div>
  );
};

export default index;

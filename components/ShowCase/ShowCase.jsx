import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classList from "./ShowCase.module.scss";
import sample from "../../assets/images/sample/sample1.svg";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { showCaseData } from "../../utils/Data/Data";
import Section from "../Section/Section";
import ImageViewer from "../ImageViewer/ImageViewer";

const StyledBtn = ({ children, selected, type, ...restProps }) => (
  <>
    <Button
      backgroundColor={selected === type && "white"}
      color={!(selected === type) ? "white" : ""}
      style={
        !(selected === type)
          ? { border: "1px solid white" }
          : { border: "1px solid transparent" }
      }
      {...restProps}>
      {children}
    </Button>
  </>
);

const ShowCase = () => {
  const [selected, setSelected] = useState("logo");
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const filterData = showCaseData.filter((item) => item.type === selected);

  console.log(currentImage, "________");

  return (
    <>
      <div className={classList.main}>
        <div>
          <Header color="white" fontWeight={"bold"}>
            We Have Done A Lot Of Work To Over 3000+ Satisfied Global Clients
          </Header>
          <Paragraph color="#ffffffab">
            Our passion is to give the world of business a better experience by
            helping brands thrive in the digital era.
          </Paragraph>
          <div className={classList.wrapperButton}>
            <StyledBtn
              onClick={() => setSelected("logo")}
              selected={selected}
              type="logo">
              Logo
            </StyledBtn>
            <StyledBtn
              onClick={() => setSelected("eCommerce")}
              selected={selected}
              type="eCommerce">
              ECommerce Website
            </StyledBtn>
            <StyledBtn
              onClick={() => setSelected("stationary")}
              selected={selected}
              type="stationary">
              Stationary
            </StyledBtn>
            <StyledBtn
              onClick={() => setSelected("mobileApp")}
              selected={selected}
              type="mobileApp">
              Mobile App
            </StyledBtn>
            <StyledBtn
              onClick={() => setSelected("web")}
              selected={selected}
              type="web">
              Website
            </StyledBtn>
          </div>
        </div>
        <div className={classList.projectCard}>
          {selected && (
            <>
              {filterData.map((item) => (
                <>
                  <ProductCard
                    setCurrentImage={setCurrentImage}
                    setShowModal={setShowModal}
                    imageLink={item.img}
                  />
                </>
              ))}
            </>
          )}
        </div>
      </div>
      <ImageViewer
        image={currentImage}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
};

export default ShowCase;

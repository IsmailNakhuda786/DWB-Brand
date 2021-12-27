import React, { useState } from "react";
import classList from "./PricingSection.module.scss";
import Section from "../Section/Section";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Header from "../Header/Header";
import PricingPlanCard from "../PricingPlanCard/PricingPlanCard";
import ListItem from "../ListItem/ListItem";
import {pricingData} from "../../utils/Data/Data.jsx"

const StyledBtn = ({ children, selected, type, ...restProps }) => (
  <>
    <Button
      backgroundColor={selected === type ? "#05aff2": "transparent"}
      color={!(selected === type) ? "black" : "white"}
      style={
        !(selected === type)
          ? { border: "1.5px solid black" }
          : { border: "1.5px solid transparent" }
      }
      {...restProps}>
      {children}
    </Button>
  </>
);

const PricingSection = () => {

  const [selectedItem, setSelectedItems] = useState("web");
    const filteredPackages = pricingData.find((el)=> el.type === selectedItem)
  return (
    <div className={classList.pricing_section}>
      <Section>
        <div className={classList.content_box}>
          <Header fontWeight="bold">Pricing Plans</Header>
          <Paragraph>
            Tell everyone your brand story with elegant designs and vibrant
            colors! We make logos affordable!
          </Paragraph>
        </div>
        <div className={classList.button_group}>
          <StyledBtn  type="web" selected={selectedItem} onClick={() => setSelectedItems("web")} >
            Website
          </StyledBtn>
          <StyledBtn type="eCommerce" selected={selectedItem} onClick={() => setSelectedItems("eCommerce")} >
            ECommerce Website
          </StyledBtn>
          <StyledBtn type="digitalMarketing" selected={selectedItem} onClick={() => setSelectedItems("digitalMarketing")} >
            Marketing Collaterals
          </StyledBtn>
          <StyledBtn type="videoAnimation" selected={selectedItem} onClick={() => setSelectedItems("videoAnimation")} >
            Video Animation
          </StyledBtn>
          <StyledBtn type="logo" selected={selectedItem} onClick={() => setSelectedItems("logo")} >
            Logo
          </StyledBtn>
        </div>
        <div className={classList.pricing_plan_wrapper}>
          {filteredPackages.packages.map(({type,discountPrice,price,services}) => <PricingPlanCard
            amount={price}
            netAmount={`$${discountPrice}`}
            title={type}
            status={"Payable Amount"}>
            {services.map(el => <ListItem content={el} />)}        
          </PricingPlanCard>)}
        </div>
      </Section>
    </div>
  );
};

export default PricingSection;

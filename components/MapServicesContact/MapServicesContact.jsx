// **** LIBS IMPORTS ****
import React from "react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../Map/Map"), { ssr: false });

// **** REUSABLE COMPONENTS ****
import Section from "../Section/Section";
import Form from "../Form/Form";

// **** STYLE ****
import classList from "./MapServicesContact.module.scss";

const MapServicesContact = () => {
  return (
    <>
      <Section background={"#fefcfe"}>
        <div className={classList.contactMapMain}>
          <div className={classList.contactFormArea}>
            <Form
              description={""}
              heading={"Get In Touch"}
              buttonText={"Send Message"}
            />
          </div>
          <div className={classList.mapDisplayArea}>
            <Map location={[24.882876, 67.16952]} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default MapServicesContact;

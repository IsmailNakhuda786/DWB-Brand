// SHARED COMPONENETS
import Contact_Card from "../../components/Contact_Card/Contact_Card";
import Section from "../../components/Section/Section";
import MapServicesContact from "../../components/MapServicesContact/MapServicesContact";

// STYLE
import classList from "./index.module.scss";

const index = () => {
  const contactsData = [
    {
      id: 1,
      title: "Email Address",
      IconMark: "Email",
      content:
        "order@bookmywebsites.com  contact@bookmywebsites.com  support@bookmywebsites.com",
    },
    {
      id: 2,
      title: "Phone",
      IconMark: "Phone",
      content: "+92 321 322 322 323" + "+92 321 322 322 323",
    },
    {
      id: 3,
      title: "Location",
      IconMark: "Location",
      content:
        "350 Rhode Island Street Care Center, San Francisco,San Francisco, CA 94103",
    },
  ];

  return (
    <>
      <Section>
        <div className={classList.contactItems}>
          {contactsData.map((data) => (
            <Contact_Card
              IconMark={data.IconMark}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </Section>
      <MapServicesContact></MapServicesContact>
    </>
  );
};

export default index;

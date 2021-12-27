import classList from "./InnnerSection.module.scss";

const InnnerSection = ({ children }) => {
  return <div className={classList.innerSection}>{children}</div>;
};

export default InnnerSection;

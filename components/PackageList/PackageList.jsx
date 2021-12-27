import classList from "./PackageList.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

const PackageList = (props) => {
  const { title } = props;
  return (
    <div className={classList.package_list}>
      {title?.length && (
        <Header fontWeight="medium" variant="h3">
          {title}
        </Header>
      )}
      <div className={classList.list_items}>
        <FaCheckCircle
          className={classList.check_icon}
          color="#2a8fff"
          size={"22px"}
        />
        <Paragraph> 5 Custom Logo Design Concepts</Paragraph>
      </div>
      <div className={classList.list_items}>
        <FaCheckCircle
          className={classList.check_icon}
          color="#2a8fff"
          size={"22px"}
        />
        <Paragraph>By 2 Award-winning designers</Paragraph>
      </div>
      <div className={classList.list_items}>
        <FaCheckCircle
          className={classList.check_icon}
          color="#2a8fff"
          size={"22px"}
        />
        <Paragraph>Lorem ipsum dolor sit</Paragraph>
      </div>
    </div>
  );
};

export default PackageList;

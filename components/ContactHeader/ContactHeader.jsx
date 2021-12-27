import classList from "./ContactHeader.module.scss";
import Section from "../Section/Section";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Header from "../Header/Header";

const ContactHeader = () => {
  return (
    <div className={classList.contact_header_wrapper}>
      <Section padding={0}>
        <div className={classList.contact_header_inner}>
          <div className={classList.social}>
            <FaFacebookF
              className={classList.social_icons}
              color="#fff"
              size={20}
            />
            <FaInstagramSquare
              className={classList.social_icons}
              color="#fff"
              size={20}
            />
            <FaTwitter
              className={classList.social_icons}
              color="#fff"
              size={20}
            />
          </div>
          <div className={classList.contact_info}>
            <a href="">+1 000 000 0000</a>
          </div>
          <div className={classList.contact_info}>
            <a href="">+1 000 000 000</a>
          </div>
          <div className={classList.contact_info_btn}>
            <a href="">Get A Quote</a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactHeader;

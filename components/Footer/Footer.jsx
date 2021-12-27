import classList from "./Footer.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import logo from "../../assets/images/logo/logo.svg";
import Header from "../Header/Header";
import cards from "./../../assets/images/cards.svg";
import address from "./../../assets/images/address.svg";
import phone from "./../../assets/images/phone.svg";
import web_logo from "./../../assets/images/web.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className={classList.footer}>
        <div className={classList.column1}>
          <img src={logo.src} alt="" />
          <Paragraph color="white">
            DGS is the best digital agency in the USA Whose aim is to represent
            the brand identity of corporations around the globe
          </Paragraph>
        </div>
        <div className={classList.column2}>
          <Header color={`${"white"}`}>
            <h4>Contact Us</h4>
          </Header>
          <Paragraph color={`${"white"}`}>
            <img src={address.src} alt="" /> &nbsp; 350 Rodhe Island Street Care
            Center. San Franciso.CA.94103
          </Paragraph>
          <Paragraph color={`${"white"}`}>
            <img src={phone.src} alt="" />
            &nbsp; +1 805 472 4797
          </Paragraph>
          <Paragraph color={`${"white"}`}>
            <img src={web_logo.src} alt="" /> &nbsp; order@dgs.com
          </Paragraph>
        </div>

        <div className={classList.column3}>
          <Header color={`${"white"}`}>
            <h4>Useful Links</h4>
          </Header>
          <Paragraph color="white">
            <Link href="/terms-and-condition">
              <span style={{ cursor: "pointer" }}>
                {`> Terms and conditions`}
              </span>
            </Link>
          </Paragraph>
          <Paragraph color="white">
            <Link href="/privacy-policy">
              <span style={{ cursor: "pointer" }}>
                {`> Privacy Policy`}
              </span>
            </Link>
          </Paragraph>
          <Paragraph color="white">
            <Link href="/refund-policy">
              <span style={{ cursor: "pointer" }}>
                {`> Refund Policy`}
              </span>
            </Link>
          </Paragraph>
        </div>

        <div className={classList.column4}>
          <Header color={`${"white"}`}>
            <h4>Payments Methods</h4>
          </Header>
          <img src={cards.src} alt="" />
        </div>
      </div>
      <div className={classList.copyright}>
        <Paragraph color={`${"white"}`}>
          © 2021 All rights reserved by DGS
        </Paragraph>
      </div>
    </div>
  );
};

export default Footer;

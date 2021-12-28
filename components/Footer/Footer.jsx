import classList from "./Footer.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import logo from "../../assets/images/logo/logo.svg";
import Header from "../Header/Header";
import discover from "../../assets/images/icons/discover.svg";
import americanExpress from "../../assets/images/icons/americanExpress.svg";
import masterCard from "../../assets/images/icons/masterCard.svg";
import paypal from "../../assets/images/icons/paypal.svg";
import visa from "../../assets/images/icons/visa.svg";
import phone from "./../../assets/images/icons/footerPhone.svg";
import address from "../../assets/images/icons/home.svg";
import web_logo from "./../../assets/images/icons/email.svg";
import Link from "next/link";
import Section from "../Section/Section";

const Footer = () => {
  return (
    <>
      <Section background="#1d2228">
        <div className={classList.footer}>
          <div className={classList.column1}>
            <img src={logo.src} alt="" />
            <Paragraph color="white" className={classList.content}>
              Digital Web Builder is the best digital agency in the USA Whose
              aim is to represent the brand identity of corporations around the
              globe
            </Paragraph>
          </div>

          <div className={classList.column2}>
            <Header color={`${"white"}`} fontSize="26" fontWeight="medium">
              Contact Us
            </Header>
            <span className={classList.contact}>
              <img src={address.src} alt="" />
              <Paragraph color={`${"white"}`}>
                350 Rodhe Island Street Care Center. San Franciso. CA.{" "}
                <span style={{ fontFamily: "sans-sarif" }}>94103</span>
              </Paragraph>
            </span>
            <span className={classList.contact}>
              <img src={phone.src} alt="" />
              <Paragraph
                color={`${"white"}`}
                style={{ fontFamily: "sans-serif" }}>
                +1 805 472 4797
              </Paragraph>
            </span>
            <span className={classList.contact}>
              <img src={web_logo.src} alt="" />
              <Paragraph color={`${"white"}`}>order@dgs.com</Paragraph>
            </span>
          </div>

          <div className={classList.column3}>
            <Header color={`${"white"}`} fontSize="26" fontWeight="medium">
              Useful Links
            </Header>
            <Paragraph color="white">
              <Link href="/terms-and-condition">
                <span style={{ cursor: "pointer" }}>
                  {`>`} &nbsp; Terms and conditions
                </span>
              </Link>
            </Paragraph>
            <Paragraph color="white">
              <Link href="/privacy-policy">
                <span style={{ cursor: "pointer" }}>
                  {`>`} &nbsp; Privacy Policy
                </span>
              </Link>
            </Paragraph>
            <Paragraph color="white">
              <Link href="/refund-policy">
                <span style={{ cursor: "pointer" }}>
                  {`>`} &nbsp; Refund Policy
                </span>
              </Link>
            </Paragraph>
          </div>

          <div className={classList.column4}>
            <Header
              color={`${"white"}`}
              fontSize="26"
              fontWeight="medium"
              style={{ marginBottom: "8px" }}>
              Payments
            </Header>
            <Header color={`${"white"}`} fontSize="26" fontWeight="medium">
              Methods
            </Header>
            <img src={masterCard.src} alt="" />
            <img src={visa.src} alt="" />
            <img src={discover.src} alt="" />
            <img src={paypal.src} alt="" />
            <img src={americanExpress.src} alt="" />
          </div>
        </div>
      </Section>
      <div className={classList.copyright}>
        <Paragraph color={`${"white"}`} style={{ margin: "0px" }} fontSize="14">
          © 2022 All rights reserved by Digital Web Builder
        </Paragraph>
      </div>
    </>
  );
};

export default Footer;

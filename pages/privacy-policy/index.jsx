import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import classList from "./index.module.scss";

const index = () => {
  return (
    <Section>
      <div className={classList.IAmPrivacyPolicy}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold" }}>
          PRIVACY POLICY STATEMENT
        </Header>
        <Paragraph style={{ marginTop: "30px" }}>
          BOOKMYWEBSITES is highly committed to keeping client's personal
          information safe and secure and we collect only essential and
          inevitable information to process your order. We never share any of
          your information with any individual outside our company in any way
          until you agree to permit us for doing so.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          We at BOOKMYWEBSITES value our customer's privacy and we are highly
          committed to keeping client's personal information safe and secure. We
          collect only essential and inevitable information to process your
          order. We never share any of your information with any individual
          outside our parent company KODEARENA LTD in any way until you agree to
          permit us for doing so.
        </Paragraph>
      </div>

      <div className={classList.IAmPrivacyPolicy}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          INFORMATION COLLECTION
        </Header>
        <Paragraph style={{ marginTop: "30px" }}>
          We collect clients’ information via Email, Phone and Contact Us and
          Order Form and it is protected as per the privacy policy set by
          BOOKMYWEBSITES. Clients’ information is never disclosed, shared, or
          sold to any third-party services.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          Initially, the personal information we require is about clients’ name,
          company’s name, billing address, email address, secondary email,
          phone, and fax numbers, order details, and place of residence and some
          of which is optional. Along with this, we need information in the
          creative brief in order to start working on your order.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          Additionally, collection of information includes opinions pertaining
          to complaints, appreciation and comments about the product.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          Technical information which is collected and recorded includes your IP
          address, browser version, operating system and the date and time when
          you visit. Google Analytics or some similar tool or service is also
          used for collecting this data.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          All information is collected through BOOKMYWEBSITES but may be shared
          under (if required) with our parent company KODEARENA LTD. However,
          the parent company KODEARENA LTD uses highly secured platforms to
          ensure there is no breach of data.
        </Paragraph>
      </div>

      <div className={classList.IAmPrivacyPolicy}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          USAGE OF COLLECTED INFORMATION
        </Header>
        <Paragraph style={{ marginTop: "30px" }}>
          First of all, the information we collect helps us to understand
          exactly what product you need and what special things would you
          require in it and secondly the billing information is inevitable for
          the payment process.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          The email addresses are used for communication about order status,
          comments and opinions and delivery of the finalized product.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          Moreover, we may send emails of updates on the website, promotional
          offers, launch of a new product/service and the latest news in the
          industry.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          This information also helps us to improve our marketing strategies and
          compile the record of the most selling products.
        </Paragraph>
      </div>

      <div className={classList.IAmPrivacyPolicy}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          PRIVACY OF PAYMENTS
        </Header>
        <Paragraph style={{ marginTop: "30px" }}>
          To make sure the practice of the best privacy for payments, we offer
          acceptance from multiple payment options. The payment processor where
          the clients put their billing information uses Secure Sockets Layer
          (SSL) which is indicated in the domain as “https://”. Therefore, we
          assure you that there is no issue at all with the privacy of the
          payment process and billing information.
        </Paragraph>
      </div>

      <div className={classList.IAmPrivacyPolicy}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          CONFIDENTIALITY
        </Header>
        <Paragraph style={{ marginTop: "30px" }}>
          Confidentiality is surely a serious concern and we are fully aware of
          the fact and this is why we never compromise over the confidentiality
          of our clients’ information.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          We use your personal information in order to keep in touch with you so
          that we can have smooth communication about the order process.
          Therefore, your entire information like name, billing address, e-mail
          address, telephone number, fax, etc. is treated as confidential and
          saved at a secure location which is accessible by the designated
          members only ensuring that it stays safe and there is no threat of its
          being stolen or hacked. We reassure that your personal information
          will never be released to any third party in any circumstances until
          you allow or we are forced by law.
        </Paragraph>
      </div>

      <div className={classList.IAmPrivacyPolicy}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          AMENDMENTS
        </Header>
        <Paragraph style={{ marginTop: "30px" }}>
          BOOKMYWEBSITES may amend its privacy policy for more strict security
          concerns if needed. However, the entire amendments about personal
          information security concerns will be declared with prior notice of
          the effective date of amended or updated privacy policies.
        </Paragraph>
      </div>

      <div className={classList.IAmPrivacyPolicy}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          CONDITIONS OF INFORMATION DISCLOSURE
        </Header>
        <Paragraph style={{ marginTop: "30px" }}>
          In the first place, it is our top priority to avoid information
          disclosure. However, the information disclosure can only take place if
          we are to abide by the country's law for judicial proceedings, court
          orders, or any other legal procedure.
        </Paragraph>
      </div>

      <div className={classList.IAmPrivacyPolicy}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          CONTACT US
        </Header>
        <Paragraph style={{ marginTop: "30px" }}>
          If you have any confusion or concerns regarding our privacy policies,
          you can contact us via our contact us form.
        </Paragraph>
      </div>
    </Section>
  );
};

export default index;

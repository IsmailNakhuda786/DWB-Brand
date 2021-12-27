import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import List from "../../components/List/List";
import Section from "../../components/Section/Section";
import classList from "./index.module.scss";
import {
  satusfactionGuarenteeList,
  deliveryPolicy,
  communicationPolicy,
  refundPolicyList,
} from "../../utils/Data/Data.jsx";

const index = () => {
  return (
    <Section>
      <div className={classList.IAmTermsAndCondition}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold" }}>
          REVISION POLICY
        </Header>
        <Paragraph style={{ marginTop: "20px" }}>
          The allotted number of revisions is based on your selected package and
          you can demand as much revisions as stated in your package details. We
          focus on providing the best services to our customers and will
          continue revising until your needs is met. You are not liable to pay
          additional price if the design concepts are not changed. You will have
          your revised design in 48 hours.
        </Paragraph>
        <Paragraph style={{ marginTop: "20px" }}>
          Any changes/revisions requested after the logo designs are finalized
          will be treated as a new order and charged separately
        </Paragraph>
      </div>
      <div className={classList.IAmTermsAndCondition}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          REFUND POLICY
        </Header>

        {refundPolicyList.map((data, id) => {
          return <List key={id}>{data}</List>;
        })}

        <Paragraph style={{ marginTop: "10px" }}>
          <b>Note:</b> &nbsp; We have all rights to hold or reject any project
          or cancel the contract whenever it deems necessary. After the refund,
          you will not have any rights to use the designs for any purpose, they
          will be our sole property. The company will be the right full owner of
          designs..
        </Paragraph>
      </div>
      <div className={classList.IAmTermsAndCondition}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          CLAIM YOUR REFUND
        </Header>
        <Paragraph style={{ marginTop: "20px" }}>
          To have your refund, follow the following steps:
        </Paragraph>
        <Paragraph style={{ marginTop: "10px" }}>
          You can claim your refund by:
        </Paragraph>
        <List>
          <a
            style={{
              color: "rgb(173,18,22)",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            href="">
            Live Chat. &nbsp;
          </a>
          Click here to start chat now
        </List>
        <List>
          Sending us an
          <a
            style={{
              color: "rgb(173,18,22)",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            href="">
            &nbsp;Email.
          </a>
        </List>
        <Paragraph style={{ marginTop: "20px" }}>
          After you have received your refund, you will not have any rights to
          any designs submitted by BOOKMYWEBSITES, the information will be
          submitted the Copyright Acquisition of the Government Copyright
          Agencies to maintain legality.
        </Paragraph>
        <Paragraph style={{ marginTop: "10px" }}>
          As soon as we receive your refund request, we will respond to it at
          our earliest, once the required analysis is completed we will initiate
          the process.
        </Paragraph>
      </div>
      <div className={classList.IAmTermsAndCondition}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "35px" }}>
          QUALITY ASSURANCE POLICY
        </Header>
        <Paragraph style={{ marginTop: "20px" }}>
          We do our best to meet your requirements and our designers do their
          best to fulfill your expectations.
        </Paragraph>
        <Paragraph style={{ marginTop: "10px" }}>
          We believe in providing best designs and each of our designs is well
          researched and well crafted.
        </Paragraph>
      </div>
      <div className={classList.IAmTermsAndCondition}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "35px 0 20px 0",
          }}>
          100% SATISFACTION GUARANTEE
        </Header>
        {satusfactionGuarenteeList.map((data, id) => {
          return <List key={id}>{data}</List>;
        })}
      </div>
      <div className={classList.IAmTermsAndCondition}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "35px 0 20px 0",
          }}>
          DELIVERY POLICY
        </Header>
        {deliveryPolicy.map((data, id) => {
          return <List key={id}>{data}</List>;
        })}
      </div>
      <div className={classList.IAmTermsAndCondition}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "35px 0 20px 0",
          }}>
          RECORD MAINTENANCE
        </Header>
        <Paragraph style={{ marginTop: "10px" }}>
          BOOKMYWEBSITES keeps the records of finalized designs so that in case
          of any misplaced order, you will be provided the exact file.
        </Paragraph>
      </div>
      <div className={classList.IAmTermsAndCondition}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "35px 0 20px 0",
          }}>
          CUSTOMER SUPPORT
        </Header>
        <Paragraph style={{ marginTop: "10px" }}>
          Our customer support is present 24/7 to answer all of your concerns
          and queries, our team will answer your concerns anytime and every
          time.
        </Paragraph>
      </div>
      <div className={classList.IAmTermsAndCondition}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "35px 0 20px 0",
          }}>
          COMMUNICATION POLICY
        </Header>
        {communicationPolicy.map((data, id) => {
          return <List key={id}>{data}</List>;
        })}
      </div>
    </Section>
  );
};

export default index;

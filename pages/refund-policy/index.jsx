import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Paragraph from "../../components/Paragraph/Paragraph";
import { refundPolicyList } from "../../utils/Data/Data";
import classList from "./index.module.scss";

const index = () => {
  return (
    <Section>
      <div className={classList.IAmRefundPolicy}>
        <Header
          color={`${"rgb(173,18,22)"}`}
          style={{ fontSize: "24px", fontWeight: "bold" }}>
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

      <div className={classList.IAmRefundPolicy}>
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
    </Section>
  );
};

export default index;

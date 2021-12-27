import classList from "./TextArea.module.scss";
import Paragraph from "../Paragraph/Paragraph";

const TextArea = ({ fieldName, value, onChange, name, type, errorMessage }) => {
  return (
    <>
      <div className={classList.textArea}>
        <Paragraph color="#0000006e" style={{ fontSize: "14px" }}>
          {fieldName}
        </Paragraph>
        <textarea
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          id=""
          cols="20"
          rows="6"></textarea>
        {errorMessage && (
          <Paragraph color="red" style={{ fontSize: "12px" }}>
            {errorMessage}
          </Paragraph>
        )}
      </div>
    </>
  );
};

export default TextArea;

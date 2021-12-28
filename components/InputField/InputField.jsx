import classList from "./InputField.module.scss";
import Paragraph from "../Paragraph/Paragraph";

const InputField = ({
  fieldName,
  onChange,
  value,
  name,
  type,
  errorMessage,
}) => {
  return (
    <>
      <div className={classList.inputField}>
        <Paragraph
          color="#0000006e"
          style={{ fontSize: "14px" }}
          marginBottom="0">
          {fieldName}
        </Paragraph>

        <input onChange={onChange} value={value} name={name} type={type} />

        {errorMessage && (
          <Paragraph color="red" style={{ fontSize: "12px" }}>
            {errorMessage}
          </Paragraph>
        )}
      </div>
    </>
  );
};

export default InputField;

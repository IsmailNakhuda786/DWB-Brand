import InnnerSection from "../InnerSection/InnnerSection";
import classList from "./UsableRow.module.scss";
import defaultImage from "../../assets/images/sample/sample4.png";

const UsableRow = ({
  image = defaultImage,
  children,
  customClass,
  backgroundColor = "transparent",
  style = {},
  reverse,
  gridGapClass,
  imageClass,
}) => {
  return (
    <>
      {reverse ? (
        <div className={`${classList.iAmUseableRow} ${gridGapClass}`}>
          <InnnerSection padding="0px">
            <div
              className={`${classList.content} ${customClass}`}
              style={{
                backgroundColor: `${backgroundColor}`,
                ...style,
              }}>
              {children}
            </div>
          </InnnerSection>
          <div className={classList.wrapperImage}>
            <img src={image?.src} alt="" className={`${imageClass}`} />
          </div>
        </div>
      ) : (
        <div className={`${classList.iAmUseableRow} ${gridGapClass}`}>
          <div className={classList.wrapperImage}>
            <img src={image.src} alt="" />
          </div>
          <InnnerSection padding="0px">
            <div
              className={`${classList.content} ${customClass}`}
              style={{
                backgroundColor: `${backgroundColor}`,
                ...style,
              }}>
              {children}
            </div>
          </InnnerSection>
        </div>
      )}
    </>
  );
};

export default UsableRow;

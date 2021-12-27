import { useState } from "react";
import classList from "./ImageViewer.module.scss";
import { HiOutlineX } from "react-icons/hi";

const ImageViewer = (props) => {
  const { image = "", show, onHide } = props;

  return (
    <>
      {show && (
        <div className={classList.image_viewer_wrapper}>
          <div className={classList.close_icon}>
            <HiOutlineX onClick={onHide} size={"30px"} color={"#fff"} />
          </div>
            <img src={image} alt="" />
        </div>
      )}
    </>
  );
};

export default ImageViewer;

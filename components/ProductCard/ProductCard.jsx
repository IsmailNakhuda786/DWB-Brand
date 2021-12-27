import classList from "./ProductCard.module.scss";
import { AiOutlineEye } from "react-icons/ai";

const ProductCard = ({ imageLink, setShowModal, setCurrentImage }) => {
  return (
    <>
      <div className={classList.imgContainer}>
        <img className={classList.imgwidth} src={imageLink.src} alt="" />
        <span>
          <AiOutlineEye onClick={()=> {setCurrentImage(imageLink.src); setShowModal(true) }}/>
        </span>
      </div>
    </>
  );
};

export default ProductCard;

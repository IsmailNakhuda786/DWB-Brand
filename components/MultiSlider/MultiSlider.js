import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import classList from "./MultiSlider.module.scss";

const MultiSlider = (props) => {
  const {
    images,
    showDots = true,
    autoPlay = false,
    swipe = false,
    arrows = false,
    infinite = true,
  } = props;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2800, min: 1601 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1600, min: 992 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 991, min: 541 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      autoPlay={autoPlay}
      arrows={arrows}
      showDots={showDots}
      swipeable={swipe}
      infinite={infinite}
      responsive={responsive}>
      {images?.map((img, index) => {
        return (
          <div key={index} className={classList.slider_items}>
            <img className={classList.slider_images} src={img.src} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default MultiSlider;

import Carousel from "../../components/Carousel/Carousel";
import ComboPackage from "../../components/ComboPakage/ComboPackage";
import ImageViewer from "../../components/ImageViewer/ImageViewer";
import MainBanner from "../../components/MainBanner/MainBanner";
import Navbar from "../../components/Navbar/Navbar";
import Statistics from "../../components/Statistics/Statistics";

const index = () => {
  return (
    <div
      style={{
        height:"100vh",
        padding: 20,
        background: "#2a5fff",
        display: "flex",
        justifyContent: "space-around",
      }}>
      <ImageViewer/>
    </div>
  );
};

export default index;

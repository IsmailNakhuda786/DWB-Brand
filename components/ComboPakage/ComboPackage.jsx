import classList from "./ComboPackage.module.scss";
import Header from "../Header/Header";
import PackageList from "../PackageList/PackageList";
import Button from "../Button/Button";

const ComboPackage = () => {
  return (
    <>
      <div className={classList.packages_wrapper}>
        <div className={classList.packages_items}>
          <div className={classList.header_items}>
            <img
              className={classList.thumb}
              src={
                "https://bookmywebsites.com/assets/uploads/media-uploader/bk1631027275.png"
              }
              alt=""
            />
          </div>
          <div
            className={`${classList.header_items} ${classList.centralize_txt}`}>
            <Header fontWeight="medium" variant="h3">
              Combo Packages
            </Header>
            <Header fontWeight="medium" variant="h2">
              Growth Seeker Package
            </Header>
          </div>
          <div
            className={`${classList.header_items} ${classList.super_sales_wrapper}`}>
            <img
              className={classList.super_sales}
              src={
                "https://bookmywebsites.com/assets/uploads/media-uploader/bk11631027070.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className={classList.packages_items}>
          <div className={classList.inner_items}>
            <PackageList title="Combo package" />
            <PackageList title="Combo package" />
            <PackageList title="Combo package" />
          </div>
          <div className={classList.inner_items}>
            <PackageList />
            <PackageList title="Combo package" />
            <PackageList />
          </div>
          <div className={classList.inner_items}>
            <PackageList />
            <PackageList title="Combo package" />
            <PackageList />
          </div>
        </div>
        <div className={classList.packages_items}>
          <div
            className={`${classList.inner_items} ${classList.order_info_wrapper}`}>
            <a
              href="#"
              className={`${classList.combo_pack} ${classList.bg_dark}`}>
              Call Now +1 000 000 0000
            </a>
          </div>
          <div
            className={`${classList.inner_items} ${classList.centralize_txt}`}>
            <div>
              <Header variant="h3">
                <del>$000</del>
              </Header>
              <Header>$999</Header>
            </div>
          </div>
          <div
            className={`${classList.inner_items} ${classList.order_info_wrapper}`}>
            <a href="#" className={`${classList.combo_pack}`}>
              Order Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComboPackage;

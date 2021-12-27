import React, { useEffect, useState } from "react";
import NavLink from "./../Navlinks/Navlinks";
import Slider from "../Slider/Slider";
import { HiMenu } from "react-icons/hi";
import Logo from "../../assets/images/logo/logo.svg";
import Dropdown from "../DropDown/DropDown";
import classList from "./Navbar.module.scss";
import ContactHeader from "../ContactHeader/ContactHeader";

var services = [
  {
    name: "Logo Design",
    to: "/services/logo-design",
  },
  {
    name: "Web Design",
    to: "/services/web-design",
  },
  {
    name: "Web Development",
    to: "/services/web-development",
  },
  {
    name: "Illustration",
    to: "/services/illustration",
  },
  {
    name: "Video Animation",
    to: "/services/video-animation",
  },
  {
    name: "Digital Marketing",
    to: "/services/digital-marketing",
  },
  {
    name: "Creative Copywriting",
    to: "/services/creative-copy-writing",
  },
];

const Navbar = () => {
  var [navbar, setNavbar] = useState(false);
  var [scroll, setScroll] = useState(0);
  var scrollTracker = () => {
    if (window.scrollY < 1) {
      setScroll(0);
    } else {
      setScroll(1);
    }
  };
  useEffect(() => {
    //CDM
    window.addEventListener("scroll", scrollTracker);
  }, []);
  // console.log(`scroll value - ${scroll}`);

  console.log(navbar);
  return (
    <>
      <ContactHeader />
      <div
        style={{
          backgroundColor: scroll === 0 ? "white" : "rgba(255,255,255,0.95)",
        }}
        className={classList.navbar}>
        <Slider navbar={navbar} setNavbar={setNavbar} />
        <div
          style={{ alignItems: "flex-start" }}
          className={`${classList.logoArea} ${classList.center}`}>
          <NavLink href="/" exact className="nav-item nav-link">
            <img
              className={classList.logo}
              src={Logo.src}
              style={{ objectFit: "fill" }}
            />
          </NavLink>
        </div>
        <div className={classList.menuItemArea}>
          <div className={classList.navSimpleItems}>
            <NavLink href="/" exact={"true"}>
              Home
            </NavLink>
            <div className={classList.navDropdown}>
              <Dropdown
                options={services}
                title="Services"
                onSelect={(e) => {}}
              />
            </div>
            <NavLink href="/price-plan">Price Plan</NavLink>
            <NavLink href="/showcase">Showcase</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
        <HiMenu onClick={() => setNavbar(true)} className={classList.ham} />
      </div>
    </>
  );
};

export default Navbar;

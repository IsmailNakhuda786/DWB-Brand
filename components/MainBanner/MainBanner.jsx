import React, { useState, useEffect, useRef, Children } from "react";

import classList from "./MainBanner.module.scss";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button/Button";

const AnimatedContent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      transition={{ duration: 0.8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}>
      {children}
    </motion.div>
  );
};
const AnimatedImage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      transition={{ duration: 0.8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}>
      {children}
    </motion.div>
  );
};

const MainBanner = () => {
  var [paraNumber, setParaNumber] = useState(3);
  var interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setParaNumber(++paraNumber);
    }, 6000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);
  var pNumber = (paraNumber % 3) + 1;

  return (
    <div className={classList.main_banner_wrapper}>
      <Section height={"100%"}>
        <div className={classList.slides_items}>
          <div className={classList.inner_slides}>
            <AnimatePresence exitBeforeEnter>
              {pNumber === 1 && (
                <AnimatedContent key={1}>
                  <Header
                    fontWeight="bold"
                    customClass={classList.header_fonts}
                    variant="h2"
                    color="#fff">
                    TRANSFORMING YOUR BRAND’S DIGITAL Presence Through Digital
                    Branding
                  </Header>
                  <Header
                    fontWeight="semi-bold"
                    customClass={classList.header_fonts}
                    color="#fff">
                    WEB DESIGNS & DEVELOPMENT
                  </Header>
                  <Paragraph color="#fff">
                    ATSBRAND help brands boost their digital presence through
                    digital branding services. We provide digital assets that
                    are exactly tailored to your business needs.
                  </Paragraph>
                  <br />
                  <Button color="#fff">Get A Quote</Button>
                </AnimatedContent>
              )}
              {pNumber === 2 && (
                <AnimatedContent key={2}>
                  <Header
                    fontWeight="bold"
                    customClass={classList.header_fonts}
                    variant="h2"
                    color="#fff">
                    Want to hire Professional logo designers!
                  </Header>
                  <Header
                    fontWeight="semi-bold"
                    customClass={classList.header_fonts}
                    color="#fff">
                    Creative Logo Design
                  </Header>
                  <Paragraph color="#fff">
                    ATSBRAND is a modern logo design agency. Our professional
                    designer's team is capable of crafting any kind of design
                    either it’s for small business logo design or corporate
                    logo.
                  </Paragraph>
                  <br />
                  <Button color="#fff">Get A Quote</Button>
                </AnimatedContent>
              )}
              {pNumber === 3 && (
                <AnimatedContent key={3}>
                  <Header
                    fontWeight="bold"
                    customClass={classList.header_fonts}
                    variant="h2"
                    color="#fff">
                    Your Mobile Application, Just A Tap Away!
                  </Header>
                  <Header
                    fontWeight="semi-bold"
                    customClass={classList.header_fonts}
                    color="#fff">
                    Mobile Application Development
                  </Header>
                  <Paragraph color="#fff">
                    ATSBRAND build professional mobile applications across
                    different platforms including iOS, Android.
                  </Paragraph>
                  <br />
                  <Button color="#fff">Get A Quote</Button>
                </AnimatedContent>
              )}
            </AnimatePresence>
          </div>
          <div className={classList.inner_slides}>
            <AnimatePresence exitBeforeEnter>
              {pNumber === 1 && (
                <AnimatedImage key={1}>
                  <img
                    src={
                      "https://codemaximus.com/wp-content/uploads/2019/03/digital-1.png"
                    }
                    alt=""
                  />
                </AnimatedImage>
              )}
              {pNumber === 2 && (
                <AnimatedImage key={2}>
                  <img
                    src={
                      "https://alltopicss.com/wp-content/uploads/2021/09/zz.png"
                    }
                    alt=""
                  />
                </AnimatedImage>
              )}
              {pNumber === 3 && (
                <AnimatedImage key={3}>
                  <img
                    src={"https://www.amhwebstudio.co.in/img/brand.svg"}
                    alt=""
                  />
                </AnimatedImage>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MainBanner;

import React from "react";
import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleThree from "@/components/Header/HeaderStyle-Three";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterThree from "@/components/Footer/Footer-Three";
import CounterThree from "@/components/Counters/Counter-Three";
import AccordionThree from "@/components/Accordions/Accordion-Three";
import TeamThree from "@/components/Team/TeamThree";
import ContactForm from "@/components/Contacts/Contact-Form";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "@/components/Abouts/About";
import AcademyGalleryOne from "@/components/Academy-Gallery/AcademyGallery-One";
import TeamNine from "@/components/Team/TeamNine";
import AboutCallToAction from "@/components/Call-To-Action/AboutCallToAction";
import WhyTalentelyCallToAction from "@/components/Call-To-Action/WhyTalentelyCallToAction";

const WhyTAlentely = () => {
  return (
    <>
      <PageHead title="Why Talently" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleThree
            headerType="rbt-transparent-header"
            headerSticky="rbt-sticky"
          />
          <MobileMenu />
          <Cart />

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <AcademyGalleryOne />
            </div>
          </div>

          <div className="rbt-team-area bg-color-white rbt-section-gapBottom">
            <TeamNine />
          </div>

          <div className="rbt-call-to-action-area  bg-gradient-16 rbt-section-gap-own">
            <WhyTalentelyCallToAction />
          </div>

          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default WhyTAlentely;

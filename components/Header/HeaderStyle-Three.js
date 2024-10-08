import React from "react";
import HeaderTopEight from "./Header-Top/HeaderTop-Eight";
import HeaderMidOne from "./Header-Top/HeaderMid-One";
import HeaderTen from "./Headers/Header-Ten";
import DarkSwitch from "./dark-switch";
import { useAppContext } from "@/context/Context";
import HeaderTopMidThree from "./Header-Top/HeaderTopMid-Three";

const HeaderStyleThree = ({ headerSticky }) => {
  const { isLightTheme, toggleTheme } = useAppContext();
  return (
    <>
      {/* <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} /> */}
      <header className={`rbt-header rbt-header-10`}>
        <div className="rbt-sticky-placeholder"></div>
        {/* <HeaderTopEight
          bgColor="bg-color-darker rbt-border-bottom"
          gapSpaceBetween="header-space-betwween"
          container="container-fluid"
        /> */}

        <HeaderMidOne
          container="container-fluid"
          gapSpaceBetween="header-space-betwween"
          bgColor="bg-color-white rbt-border-bottom"
        />

        {/* <div className="rbt-header-middle position-relative rbt-header-mid-1 bg-color-white rbt-border-bottom">
          <HeaderTopMidThree flexDirection="" />
        </div> */}
        {/* NavBar */}
        <HeaderTen
          headerSticky={headerSticky}
          sticky="header-sticky"
          container="container-fluid"
          navigationEnd="rbt-navigation-center"
        />
      </header>
    </>
  );
};

export default HeaderStyleThree;

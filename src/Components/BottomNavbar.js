import React, { useState } from "react";
import {
  BoxSeam,
  BoxSeamFill,
  ArrowDownCircle,
  ArrowDownCircleFill,
  Bell,
  BellFill,
  Tv,
  TvFill,
} from "react-bootstrap-icons";

const BottomNavbar = () => {

  const [navIcons, setNavIcons] = useState({
    boxSeam: false,
    tv: false,
    bell: false,
    download: false,
  });

  const selectedIcon = (payload) => {
    if (payload === "boxSeam") {
      setNavIcons({boxSeam: true, tv: false, download: false, bell: false});
    } else if (payload === "tv") {
      setNavIcons({boxSeam: false, tv: true, download: false, bell: false});
    } else if (payload === "download") {
      setNavIcons({boxSeam: false, tv: false, download: true, bell: false});
    } else if (payload === "bell") {
      setNavIcons({boxSeam: false, tv: false, download: false, bell: true});
    }
  };

  return (
    <div className="bottom-nav-bar">
      <div onClick={() => selectedIcon("boxSeam")}>
        {navIcons.boxSeam ? <BoxSeamFill color="white" /> : <BoxSeam color="white" />}
      </div>
      <div onClick={() => selectedIcon("tv")}>
        {navIcons.tv ? <TvFill color="white" /> : <Tv color="white" />}
      </div>
      <div onClick={() => selectedIcon("bell")}>
        {navIcons.bell ? <BellFill color="white" /> : <Bell color="white" />}
      </div>
      <div onClick={() => selectedIcon("download")}>
        {navIcons.download ? (
          <ArrowDownCircleFill color="white" />
        ) : (
          <ArrowDownCircle color="white" />
        )}
      </div>
    </div>
  );
};

export default BottomNavbar;

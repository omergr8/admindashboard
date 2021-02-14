import classes from "./Sidebar.module.css";
import Auxilary from "../../../hoc/Auxilary";
import Brand from "./Brand/Brand";
import Menu from "./Menu/Menu";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const sidebar = forwardRef((props, ref) => {
  const [sidebarStat, setsidebarStat] = useState(false);

  const collapse = () => {
    if (!sidebarStat) {
      return classes.sidebar;
    } else {
      return classes.sidebarCollapse;
    }
  };

  useImperativeHandle(ref, () => ({
    changeWidth() {
      if (sidebarStat) {
        setsidebarStat(false);
      } else {
        setsidebarStat(true);
      }
    },
  }));

  return (
    <Auxilary>
      <div className={collapse()}>
        <Brand isCollapse={sidebarStat} />
        <Menu isCollapse={sidebarStat} />
      </div>
    </Auxilary>
  );
});
export default sidebar;

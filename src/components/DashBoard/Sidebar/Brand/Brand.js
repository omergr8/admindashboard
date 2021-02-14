import React from "react";
import classes from "./Brand.module.css";

const brand = (props) => {
  const hide = () => {
    if (props.isCollapse) {
      return classes.hideLabel;
    } else {
      return;
    }
  };
  return (
    <div className={classes.sidebarBrand}>
      <h2>
        <span className="lab la-accusoft"></span>{" "}
        <span className={hide()}>Accusoft</span>
      </h2>
    </div>
  );
};
export default brand;

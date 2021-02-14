import Maincontent from "./MainContent/MainContent";
import Sidebar from "./Sidebar/Sidebar";
import Auxilary from "../../hoc/Auxilary";
import React, { useRef } from "react";
const DashBoard = (props) => {
  const childRef = useRef();

  const check = () => {
    childRef.current.changeWidth();
  };
  return (
    <Auxilary>
      <Sidebar ref={childRef} />
      <Maincontent check={check} />
    </Auxilary>
  );
};
export default DashBoard;

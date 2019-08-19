import React from "react";
import Aside from "./Aside.js";

const Warning = ({ children }) => {
  return <Aside type="warning" children={children} />;
};

export default Warning;

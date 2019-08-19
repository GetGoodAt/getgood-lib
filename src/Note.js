import React from "react";
import Aside from "./Aside.js";

const Note = ({ children }) => {
  return <Aside type="note" children={children} />;
};

export default Note;

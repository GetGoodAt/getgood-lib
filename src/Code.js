import React from "react";
import Runkit from "./Runkit.js";
import Highlight from "react-highlight";

const Code = ({ children, className, metastring }) => {
  const language = className.match(/language-([a-z]+)/)[1];
  if (
    (language === "js" || language === "javascript") &&
    metastring === "repl"
  ) {
    return <Runkit source={children} />;
  }

  return <Highlight className={className}>{children}</Highlight>;
};

export default Code;

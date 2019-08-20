import React, { useState } from "react";
import Runkit from "./Runkit.js";
import Highlight from "react-highlight";

const Code = ({ children, className, metastring }) => {
  const [replOpen, setReplOpen] = useState(false);
  let canOpenInRepl = false;
  const language = className.match(/language-([a-z]+)/)[1];

  if (
    (language === "js" || language === "javascript") &&
    metastring === "repl"
  ) {
    canOpenInRepl = true;
  }

  if (replOpen) {
    return <Runkit source={children} />;
  }

  if (canOpenInRepl && !replOpen) {
    return (
      <div className="Codeblock">
        <Highlight className={className}>{children}</Highlight>
        <a onClick={() => setReplOpen(true)} className="TryInRepl">
          Try in REPL
        </a>
        <style jsx>{`
          .TryInRepl {
            font-size: 1.3rem;
            position: relative;
            right: 3rem;
            float: right;
            margin: -4rem 0em;
            border-bottom: 1px solid #d4d4d4;
            border-bottom-color: rgb(212, 212, 212);
            color: #4b71ca;
            padding-bottom: 3px;
            text-decoration: none;
          }
          .TryInRepl:hover {
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
  return <Highlight className={className}>{children}</Highlight>;
};

export default Code;

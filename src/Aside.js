import React from "react";

import { TiWarning as WarningIcon } from "react-icons/ti";
import { TiLightbulb as TipIcon } from "react-icons/ti";
import { TiInfo as NoteIcon } from "react-icons/ti";

const icons = {
  note: NoteIcon,
  warning: WarningIcon,
  tip: TipIcon
};

const Aside = ({ type = "tip", children }) => {
  const Icon = icons[type];
  return (
    <div className="Aside">
      <div className="Aside__Icon">
        <Icon />
      </div>
      <div className="Aside__Content">
        {children}
      </div>
    </div>
  );
};

export default Aside;

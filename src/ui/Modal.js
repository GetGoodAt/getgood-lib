import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="Modal">
      <div className="Modal__Inner">{children}</div>
    </div>
  );
};

export default Modal;

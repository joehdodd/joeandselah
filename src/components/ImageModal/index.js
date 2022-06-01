import * as React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, isOpen }) => {
  console.log(isOpen);
  const el = document.createElement("div");
  React.useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return isOpen ? ReactDOM.createPortal(children, el) : null;
};

export default Modal;

import React from "react";
import "./Modal.css";

const Modal = ({ children, onClose, onOkay }) => {
  return (
    <div className="modal">
      <div className="content">
        <div>{children}</div>
        <div className="footer">
          {!!onClose && (
            <div onClick={onClose} className="button close">
              Close
            </div>
          )}
          {!!true && (
            <div onClick={onOkay} className="button okay">
              Okay
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

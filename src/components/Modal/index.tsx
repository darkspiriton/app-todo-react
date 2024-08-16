import React from "react";
import ReactDOM from "react-dom";
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={`fixed inset-0 flex items-center justify-center z-50`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white w-[500px] h-[400px] rounded-xl z-10">
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
export { Modal };

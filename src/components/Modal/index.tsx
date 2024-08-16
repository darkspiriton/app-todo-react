// @ts-nocheck
import ReactDOM from "react-dom";
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={`fixed inset-0 flex items-center justify-center z-50`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white h-[300px] rounded-xl z-10 max-w-[400px]">
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
export { Modal };

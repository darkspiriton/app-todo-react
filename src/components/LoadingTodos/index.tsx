import { FidgetSpinner } from "react-loader-spinner";
function LoadingTodos() {
  return (
    <div className="self-center">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
      <span className="animate-spin h-5 w-5">Loading...</span>
    </div>
  );
}

export { LoadingTodos };

import CircularProgress from "@mui/material/CircularProgress";
import "../common/styles";

const LoadingModal: React.FC<{ loadModal: boolean }> = (loadModal) => {
  if (!loadModal) {
    return (
      <div className="loading-div">
        <CircularProgress />
      </div>
    );
  }
  else{
    return <></>
  }
};

export default LoadingModal;

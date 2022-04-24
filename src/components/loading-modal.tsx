import CircularProgress from "@mui/material/CircularProgress";
import "../common/styles";

/** LOADING SPINNER USED WHEN DATA IS BEEN FETCH */
const LoadingModal: React.FC = () => {
  
    return (
      <div className="loading-div">
        <CircularProgress />
      </div>
    );
  
};

export default LoadingModal;

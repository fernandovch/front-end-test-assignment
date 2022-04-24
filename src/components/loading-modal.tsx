import CircularProgress from "@mui/material/CircularProgress";
import "../common/styles";

const LoadingModal: React.FC = () => {
  
    return (
      <div className="loading-div">
        <CircularProgress />
      </div>
    );
  
};

export default LoadingModal;

import "../common/styles";

/** COMPONENT USED FOR DISPLAYING NO DATA LEGEND */
const NoData:React.FC<{label:string}> = ({label}) => {
  return (
    <div className="element-currency">
      <div className="text-section">
        <h6>{label}</h6>
      </div>
    </div>
  );
};

export default NoData;

import "./currency-item.css";

const NoData:React.FC<{label:string}> = ({label}) => {
  return (
    <div className="element-currency">
      <div className="text-section">
        <h3>{label}</h3>
      </div>
    </div>
  );
};

export default NoData;

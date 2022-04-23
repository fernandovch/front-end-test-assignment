import { ICurrency } from "../common/interfaces/currency";
import { IEventToTrigger } from "../common/interfaces/eventToTrigger";

import CurrencyItem from "./currency-item";
import NoData from "./no-data";

const CurrencyList: React.FC<{
  currencyData: ICurrency[];
  eventToTrigger: IEventToTrigger;
}> = ({ currencyData, eventToTrigger }) => {
  const elements: any = [];
  const textString: string = "Currencies added, please insert your first currency.";

  if (!currencyData.length || !currencyData)
    return <NoData label={textString} />;

  if (currencyData[0].error !== "")
    return <NoData label={`Error: ${currencyData[0].error}`} />;

  for (var currency of currencyData) {
    elements.push(
      <div key={currency.id}>
        <CurrencyItem
          props={currency}
          eventToTrigger={eventToTrigger}
        ></CurrencyItem>
      </div>
    );
  }

  return <div>{elements}</div>;
};

export default CurrencyList;

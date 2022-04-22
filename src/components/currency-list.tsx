import { Currency } from "../common/interfaces/currency"
import CurrencyItem from "./currency-item"

const CurrencyList =(props : Currency[])=>{

    const elements = props.map(currency=>{
        <div key={currency.id}>
            <CurrencyItem {...currency}></CurrencyItem>
        </div>
    })
    return
    <div>
        
    </div>


}

export default CurrencyList
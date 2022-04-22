import { Currency } from "../common/interfaces/currency"
import CurrencyItem from "./currency-item"

type ICurrency ={
    props:Currency[]
}

const CurrencyList : React.FC<{currencyData:Currency[]}> =(props : { currencyData :Currency[]})=>{

    const elements:any = []
    
        for(var currency of props.currencyData)
        {
            elements.push(        
                <div key={currency.id}>
                    <CurrencyItem {...currency}></CurrencyItem>
                </div>
            )
        }
        

    return(
        <div>
            {elements}
        </div>
    )


}

export default CurrencyList
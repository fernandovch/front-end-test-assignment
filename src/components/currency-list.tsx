import { ICurrency } from "../common/interfaces/currency"
import CurrencyItem from "./currency-item"


const CurrencyList : React.FC<{currencyData:ICurrency[]}> =(props : { currencyData :ICurrency[]})=>{

    const elements:any = []


    if (!props.currencyData)
    return <h1> No data to load </h1>

    if(props.currencyData[0].error != '')
    return <h1> Error: {props.currencyData[0].error} </h1>

    
        for(var currency of props.currencyData)
        {
            elements.push(        
                <div key={currency.marketSymbol}>
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
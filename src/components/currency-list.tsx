import { ICurrency } from "../common/interfaces/currency"
import CurrencyItem from "./currency-item"
import NoData from './no-data'

const CurrencyList : React.FC<{currencyData:ICurrency[]}> =(props : { currencyData :ICurrency[]})=>{

    const elements:any = []

    const textString :string = "No data is available"

    if (!props.currencyData.length || !props.currencyData )
    return <NoData label={textString} />

    if(props.currencyData[0].error !== '')
    return <h1> Error: {props.currencyData[0].error} </h1>

    
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
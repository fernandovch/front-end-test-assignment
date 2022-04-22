
import {Currency} from './../common/interfaces/currency'

const  CurrencyItem =( props:Currency)=>
{
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.value}</h1>
        </div>
    )
}

export default CurrencyItem
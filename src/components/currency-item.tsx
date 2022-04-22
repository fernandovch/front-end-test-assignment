
import {Currency} from './../common/interfaces/currency'

const  CurrencyItem =( props: Currency)=>
{
    return(
        <div>
            <span>{props.name}</span>
            <span>{props.value}</span>
        </div>
    )
}

export default CurrencyItem

import {Currency} from './../common/interfaces/currency'

import './currency-item.css';

import CloseIcon from '@mui/icons-material/Close';  

const  CurrencyItem =( props: Currency)=>
{
    return(
        <div className='element-currency'>
            <i className='icon'/>
            <div className='text-section'>
                <span>{props.name}</span>
                <span className='currency-value'>{props.value}</span>
            </div>
            <div> <CloseIcon fontSize='small' /></div>
        </div>
    )
}

export default CurrencyItem
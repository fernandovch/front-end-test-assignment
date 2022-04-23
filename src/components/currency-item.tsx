
import {ICurrency} from './../common/interfaces/currency'
import { IEventToTrigger } from "../common/interfaces/eventToTrigger";

import './currency-item.css';

import CloseIcon from '@mui/icons-material/Close';  
import IconButton from '@mui/material/IconButton';

import { blueGrey } from '@mui/material/colors';




const  CurrencyItem : React.FC<{props:ICurrency, eventToTrigger:IEventToTrigger}> =( {props, eventToTrigger})=>
{
    
    return(
        <div className='element-currency'>
            <i className='icon'/>
            <div className='text-section'>
                <span>{props.marketSymbol}</span>
                <span className='currency-value'>{props.ticker.lastPrice} &euro;</span>
            </div>
            <div>             
            <IconButton  style={{color: blueGrey[50]}} aria-label="eliminate currency added" onClick={ ()=>{ eventToTrigger.eventToTrigger(props.id) }} >
                <CloseIcon style={{ fontSize: 10 }}  />
            </IconButton>
            </div>
        </div>
    )
}

export default CurrencyItem

import {ICurrency} from './../common/interfaces/currency'
import { IEventToTrigger } from "../common/interfaces/eventToTrigger";

import "../common/styles";

import CloseIcon from '@mui/icons-material/Close';  
import IconButton from '@mui/material/IconButton';
import { blueGrey } from '@mui/material/colors';

/** CURRENCY ITEM IT SELF, DISPLAYS NAME AND VALUE  */

const  CurrencyItem : React.FC<{props:ICurrency, eventToTrigger:IEventToTrigger}> =( {props, eventToTrigger})=>
{    
    return(
        <div className='element-currency'>
            <i className='icon'/>
            <div className='text-section'>
                <span>{props.marketSymbol.split(":")[1]}</span>
                <span className='currency-value'>{ parseFloat(props.ticker.lastPrice).toFixed(2)} &euro;</span>
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
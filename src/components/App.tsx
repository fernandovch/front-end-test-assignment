import { Currency } from '../common/interfaces/currency';

import './../common/styles'
import './App.css';

import CurrencyList from './currency-list';


function App() {

  const props : Currency []  = [{
    id:"1",
    name: 'BITCOIN',
    value: "123"
  },
  {id:"2",
  name: 'FICON',
  value: "123"
}]

const currencyData : Currency[] = props

  return (
    <div className="App">
      <header className="App-header">
         
         <CurrencyList currencyData={ currencyData } />
      </header>
    </div>
  );
}

export default App;

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
         <div>
         <CurrencyList currencyData={ currencyData } />
         </div>
         <div className="image-center">
           &nbsp;
         </div>
         <div className="searchBox"></div>         
      </header>
      <footer className='footer'>
        <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat orci at egestas commodo. Fusce ac massa eu leo varius consectetur at non enim. Etiam aliquet et dolor vitae viverra. Phasellus maximus justo nec tincidunt ullamcorper. In semper, odio eget rutrum bibendum, odio metus blandit neque, non lobortis lorem nulla eget lectus. Vivamus vel congue augue, iaculis sagittis odio. Praesent sit amet facilisis felis, sit amet dignissim justo. Proin ac dignissim nulla. Cras ultrices diam felis, non placerat tortor rutrum non.
        </section>
      </footer>
    </div>
  );
}

export default App;

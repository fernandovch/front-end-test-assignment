import { useState, useEffect } from "react";

import { ICurrency } from "../common/interfaces/currency";
import { IEventToTrigger } from "../common/interfaces/eventToTrigger";
import { useGetCurrency } from "./../querys/getCurrency";

import { v4 as uuidv4 } from "uuid";

import "../common/styles";
import "./Home.css";

import CurrencyList from "./../components/currency-list";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { orange} from "@mui/material/colors";


import { gql, useLazyQuery } from "@apollo/client";


const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[900]),
  backgroundColor: orange[900],  
  "&:hover": {
    backgroundColor: orange[800],
  },
  width: "300px",
}));

const GET_PRICES = gql`query price  {
  markets(filter:{ baseSymbol: {_eq: "BTC"} quoteSymbol: {_eq:"EUR"}}) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}`


function Home() {
  const [triggerCall, setTriggerCall] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [listCurrencies, setListCurrencies] = useState<ICurrency[]>([]);
  const [deleteElement, setDeleteElement] = useState<string>();

  const textChange = (event:any)=>{    
    setSearchValue(event.target.value)    

    getCountries()
  }

  
    //const dataCurrency =  useGetCurrency("BTC");
    

    
      const [
        getCountries, 
        { loading, data }
      ] = useLazyQuery(GET_PRICES);
    
      
      if (data && data.markets) {
        console.log(data.countries);
      }
    
    

  

  useEffect(() => {
    if (triggerCall) {
      const mock = {
        id: "",
        marketSymbol: "BTC",
        ticker: {
          lastPrice: "2.564",
        },
        error: "",
        loading: false,
      };
      mock.id = uuidv4();
    
      if (listCurrencies.length === 0) setListCurrencies([mock]);
      else {
        const pivot = [...listCurrencies, mock];
        setListCurrencies(pivot);
      }
    }

    setTriggerCall(false)
  }, [triggerCall]);

  useEffect(() => {
    console.log(deleteElement);
    if (deleteElement) {
      const cleanedList = listCurrencies.filter(
        (currency) => currency.id !== deleteElement
      );
      setListCurrencies(cleanedList);
    }
  }, [deleteElement]);

  
  const currencyData: ICurrency[] = listCurrencies;

  const deleteSelectedElement = (id: string): void => {
    setDeleteElement(id);
  };

  const eventTOChild: IEventToTrigger = {
    eventToTrigger: deleteSelectedElement,
  };

  return (
    <>
      <header className="header-section"></header>
      <section className="middle-section">
        <div className="left-section">
          <div className="logoDiv separator">
            <i className="logo" />
          </div>
          <div className="separator">
            <h3 className="separator">Now you can track all your cryptos here!</h3>
            <p>Just enter the Cryptocurrency code on the form to the right.</p>
          </div>
          <div className="scrollable-currency">
            <CurrencyList
              currencyData={currencyData}
              eventToTrigger={eventTOChild}
            />
          </div>
        </div>
        <div className="image-center">&nbsp;</div>
        <div className="image-search">
          <div className="search-box">
            <div className="searchInputs">
              <TextField
                id="outlined-basic"
                label="Cryptocurrency code"                
                variant="outlined"                
                color="info"
                focused 
                onChange={(event)=>{ textChange(event) }}
              />
              <ColorButton
                variant="contained"
                onClick={() => {
                  setTriggerCall(true);
                }}
              >
                ADD
              </ColorButton>
              <h6>Use of this service is subject to terms and conditions.</h6>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          feugiat orci at egestas commodo. Fusce ac massa eu leo varius
          consectetur at non enim. Etiam aliquet et dolor vitae viverra.
          Phasellus maximus justo nec tincidunt ullamcorper. In semper, odio
          eget rutrum bibendum, odio metus blandit neque, non lobortis lorem
          nulla eget lectus. Vivamus vel congue augue, iaculis sagittis odio.
        </section>
      </footer>
    </>
  );
}

export default Home;

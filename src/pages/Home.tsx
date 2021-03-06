import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

import { ICurrency } from "../common/interfaces/currency";
import { IEventToTrigger } from "../common/interfaces/eventToTrigger";
import { GET_PRICES } from "./../querys/getCurrency";

import CurrencyList from "./../components/currency-list";
import TextField from "@mui/material/TextField";
import LoadingModal from './../components/loading-modal'
import Button, { ButtonProps } from "@mui/material/Button";
import { orange } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import "../common/styles";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[900]),
  backgroundColor: orange[900],
  "&:hover": {
    backgroundColor: orange[800],
  },
  width: "300px",
}));


/** MAIN PAGE WHERE THE FETCH OF THE DATA OCCURS AND THE VALIDATIONS MANAGE WHAT ITEMS NEED TO BE DISPLAYED */


function Home() {

  // INDICATES IS THE DATA IS ALREADY LOADED TO THE UI
  const [loadedData, setLoadedData] = useState<boolean>(false);

  // INDICATOR THAT TRIGGERS THE CALL TO RETRIEVES THE DATA 
  const [triggerCall, setTriggerCall] = useState<boolean>(false);

  // CONTAINS THE SEARCH VALUE USE IN THE QUERY 
  const [searchValue, setSearchValue] = useState<string>("");

  // THE LIST OF ITEM RENDERED 
  const [listCurrencies, setListCurrencies] = useState<ICurrency[]>([]);

  // ID OF THE ITEM NEEDED TO BE DELETED 
  const [deleteElement, setDeleteElement] = useState<string>();

  const textChange = (event: any) => {
    setSearchValue(event.target.value);

  };

  const [getCurrencies, { loading, data }] = useLazyQuery(GET_PRICES, {
    variables: { baseSymbol: searchValue },
  });

  // TRIGGERS THE CALL TO THE API
  useEffect(() => {
    if (triggerCall) {
      getCurrencies();
      setLoadedData(false)      
    }

    setTriggerCall(false);        
  }, [triggerCall]);


  // DELETES THE ITEM FROM THE LIST 
  useEffect(() => {
    console.log(deleteElement);
    if (deleteElement) {
      const cleanedList = listCurrencies.filter(
        (currency) => currency.id !== deleteElement
      );
      setListCurrencies(cleanedList);
    }
  }, [deleteElement]);


  // IF DATA IS PRESENT AND IS NOT LOADED THEN DATA IS BEEN PASSED TO THE LIST 
  if(data && !loadedData)
  {
    if(data.markets.length >0)
    {
      let currency =  Object.assign({},data.markets[0])
      currency.id = uuidv4();
      const pivot = [currency, ...listCurrencies];
      setListCurrencies(pivot);
    }
    
    setLoadedData(true)      
    setSearchValue('')

  }

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
            <h3 className="separator">
              Now you can track all your cryptos here!
            </h3>
            <p>Just enter the Cryptocurrency code on the form to the right.</p>
          </div>
          <div className="scrollable-currency">
            <CurrencyList
              currencyData={currencyData}
              eventToTrigger={eventTOChild}
            />
              
          </div>
          {loading ? <LoadingModal /> : <></>}  
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
                value={searchValue}
                focused
                onChange={(event) => {
                  textChange(event);
                }}
              />
              <ColorButton
                variant="contained"
                onClick={() => {
                  setTriggerCall(true)
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

import { useState, useEffect } from "react";

import { Currency, ICurrency } from "../common/interfaces/currency";
import { useGetCurrency } from "./../querys/getCurrency";

import { v4 as uuidv4 } from "uuid";

import "../common/styles";
import "./Home.css";

import CurrencyList from "./../components/currency-list";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { orange } from "@mui/material/colors";

function Home() {
  
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#fd4c24"),
    backgroundColor: orange[700],
    "&:hover": {
      backgroundColor: orange["A400"],
    },
    width: "300px",
  }));


  const [count, setCount] = useState(0);
  const [listCurrencies, setListCurrencies] = useState<ICurrency[]>([]);

  const mock = {
    id : uuidv4(),
    marketSymbol: "BTC",
    ticker: {
      lastPrice: "2.564",
    },
    error: "",
    loading: false,
  };

  useEffect(() => {
    if (count > 0) {
      if (listCurrencies.length == 0) setListCurrencies([mock]);
      else {
        const pivot =[...listCurrencies, mock] ;
        setListCurrencies(pivot);
      }
    }
  }, [count]);

  //const props = useGetCurrency();

  const currencyData: ICurrency[] = listCurrencies;


  return (
    <>
      <header className="header-section"></header>
      <section className="middle-section">
        <div className="left-section">
          <div>
            <i className="logo" />
          </div>
          <div>
            <h3>Now you can track all your cryptos here!</h3>
            <p>Just enter the Cryptocurrency code on the form to the right.</p>
          </div>

          <CurrencyList currencyData={currencyData} />
        </div>
        <div className="image-center">&nbsp;</div>
        <div className="image-search">
          <div className="search-box">
            <div className="searchInputs">
              <TextField
                id="outlined-basic"
                label="Cryptocurrency code"
                variant="standard"
              />
              <ColorButton
                variant="contained"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                ADD
              </ColorButton>
              <p>Use of this service is subject to terms and conditions.</p>
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

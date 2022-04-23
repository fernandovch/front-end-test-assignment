import { gql, useQuery } from "@apollo/client";
import { ICurrency } from '../common/interfaces/currency'

const GET_PRICES = gql`query price ($baseSymbol: String!, $quoteSymbol : String!) {
  markets(filter:{ baseSymbol: {_eq:$baseSymbol} quoteSymbol: {_eq:$quoteSymbol}}) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}
`

export const useGetCurrency = (): ICurrency[]  => {
  const { data, loading, error, } = useQuery(GET_PRICES, {
    variables: { baseSymbol : "BTC", quoteSymbol: "EUR"} 
});

    if (loading) return [{marketSymbol :'', ticker : {lastPrice: ''}, error:'', loading : true }]
    if (error) return [{marketSymbol :'', ticker : {lastPrice: ''}, error:error.message , loading : true }]
    
    return data?.markets ;
}

import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { ICurrency } from '../common/interfaces/currency'

export const GET_PRICES = gql`query price ($baseSymbol: String!) {
  markets(filter:{ baseSymbol: {_eq: $baseSymbol} quoteSymbol: {_eq:"EUR"}}) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}`

export const useGetCurrency = (criteria:string): ICurrency[]  => {

  const { data, loading, error, } = useQuery(GET_PRICES, {
    variables: { baseSymbol : criteria} 
});    
    return data?.markets ;
}



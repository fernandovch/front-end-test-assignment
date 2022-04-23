import { gql, useQuery } from "@apollo/client";
import { ICurrency } from '../common/interfaces/currency'

const GET_PRICES = gql`query price ($baseSymbol:string) {
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


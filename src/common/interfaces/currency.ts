export interface Currency {
    id: string
    name: string
    value: string
}

export interface ICurrency {
    id: string
    marketSymbol: string
    ticker : {
        lastPrice : string
    }        
}

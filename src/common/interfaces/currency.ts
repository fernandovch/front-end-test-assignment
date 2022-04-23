export interface Currency {
    id: string
    name: string
    value: string
}

export interface ICurrency {
    marketSymbol: string
    ticker : {
        lastPrice : string
    }
    error: string
    loading: boolean
}

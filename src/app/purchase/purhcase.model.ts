export class ProductsToSell {
    constructor(
    public productType: string,
    public productIdentifier: string,
    public localizedDescription: string,
    public localizedTitle : string,
    public priceAmount : number,
    public priceFormatted: string,
    public priceCurrencyCode : string){}
}


export class PurchaseAdvertisementResult{
    constructor(
        public responseStatusCode: number,
        public Success: boolean,
        public Message: string
    ){}
}



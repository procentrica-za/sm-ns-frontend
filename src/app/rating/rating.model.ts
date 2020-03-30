

export class OutstandingratingResult {
    constructor (
        public responseStatusCode : number,
        public ratingid : string,
        public username : string,
        public price : string,
        public title : string,
        public description : string,
    ){}
}
export class OutstandingratingResultList {
    constructor (
        public responseStatusCode : number,
        public Outstandingratings : OutstandingratingResult[],
        public message : string,
    ){}
}

export class RateSellerResult {
    constructor (
        public responseStatusCode : number,
        public sellerrated : boolean,
        public message : string,
    ){}
}

export class PreviousratingResult {
    constructor (
        public responseStatusCode : number,
        public ratingid : string,
        public username : string,
        public rating : string,
        public comment : string,
    ){}
}
export class PreviousratingResultList {
    constructor (
        public responseStatusCode : number,
        public Previousratings : PreviousratingResult[],
        public message : string,
    ){}
}


export class InterestedbuyerResult {
    constructor (
        public responseStatusCode : number,
        public username : string,
        public advertisementid : string,
        public advertisementtype : string,
        public sellerid : string,
        public buyerid : string,
    ){}
}
export class InterestedbuyerResultList {
    constructor (
        public responseStatusCode : number,
        public Interestedbuyers : InterestedbuyerResult[],
        public message : string,
    ){}
}

export class RateBuyerResult {
    constructor (
        public responseStatusCode : number,
        public buyerrated : boolean,
        public ratingid : string,
        public message : string,
    ){}
}






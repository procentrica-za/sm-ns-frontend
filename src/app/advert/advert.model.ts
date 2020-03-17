export class TextbookResult {
    constructor (
        public responseStatusCode : number,
        public advertisementid : string,
        public userid : string,
        public isselling : boolean,
        public advertisementtype : string,
        public price : string,
        public description : string,
        public textbookid : string,
        public modulecode : string,
        public textbookname : string,
        public edition : string,
        public quality : string,
        public author : string,
        public imagebytes : string
    ){}
}
export class TextbookResultList {
    constructor (
        public responseStatusCode : number,
        public Textbooks : TextbookResult[]
    ){}
}
//messaging service
export class ActivechatResult {
    constructor (
        public responseStatusCode : number,
        public chatid : string,
        public advertisementtype : string,
        public advertisementid : string,
        public username : string,
        public message : string,
        public messagedate : string,
    ){}
}
export class ActivechatResultList {
    constructor (
        public responseStatusCode : number,
        public Activechats : ActivechatResult[],
        public message : string,
    ){}
}
export class MessageResult {
    constructor (
        public responseStatusCode : number,
        public messageid : string,
        public username : string,
        public message : string,
        public messagedate : string,
    ){}
}
export class MessageResultList {
    constructor (
        public responseStatusCode : number,
        public Messages : MessageResult[],
        public message : string,
    ){}
}

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





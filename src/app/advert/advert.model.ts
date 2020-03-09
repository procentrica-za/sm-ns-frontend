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

export class UserAdvertisementResult {
    constructor(
        public responseStatusCode: number,
        public advertisementid: string,
        public isselling: boolean,
        public advertisementtype: string,
        public entityid: string,
        public price: string,
        public description: string,
        public imagebytes: string){}
}

export class UserAdvertisementResultList {
    constructor(
        public responseStatusCode: number,
        public Advertisements: UserAdvertisementResult[]
    ){}
}
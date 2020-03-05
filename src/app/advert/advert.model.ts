export class TextbookResult {
    constructor (
        public responseStatusCode : number,
        public advertisementID : string,
        public userID : string,
        public isSelling : boolean,
        public advertisementtype : string,
        public price : string,
        public description : string,
        public textbookID : string,
        public moduleCode : string,
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
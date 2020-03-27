

export class ActivechatResult {
    constructor (
        public responseStatusCode : number,
        public chatid : string,
        public advertisementtype : string, 
        public advertisementid : string,
        public username : string,
        public price : string,
        public title : string,
        public description : string,
        public message : string,
        public messagedate : string,
        public isread : string,
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

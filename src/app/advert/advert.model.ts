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

export class AccomodationResult {
    constructor (
        public responseStatusCode : number,
        public advertisementid : string,
        public userid : string,
        public isselling : boolean,
        public advertisementtype : string,
        public price : string,
        public description : string,
        public accomodationid : string,
        public accomodationtypecode : string,
        public location : string,
        public distancetocampus : string,
        public institutionname : string,
        public imagebytes : string
    ){}
}

export class AccomodationResultList {
    constructor (
        public responseStatusCode : number,
        public Accomodations : AccomodationResult[]
    ){}
}


export class TutorResult {
    constructor (
        public responseStatusCode : number,
        public advertisementid : string,
        public userid : string,
        public isselling : boolean,
        public advertisementtype : string,
        public price : string,
        public description : string,
        public tutorid : string,
        public subject : string,
        public yearcompleted : string,
        public venue : string,
        public notesincluded : string,
        public terms: string,
        public modulecode: string,
        public imagebytes : string
    ){}
}

export class TutorResultList {
    constructor (
        public responseStatusCode : number,
        public Tutors : TutorResult[]
    ){}
}

export class NoteResult {
    constructor (
        public responseStatusCode : number,
        public advertisementid : string,
        public userid : string,
        public isselling : boolean,
        public advertisementtype : string,
        public price : string,
        public description : string,
        public noteid : string,
        public modulecode: string,
        public imagebytes : string
    ){}
}

export class NoteResultList {
    constructor (
        public responseStatusCode : number,
        public Notes : NoteResult[]
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
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
export class UserAdvertTextbookResult {
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

export class UserAdvertTextbookResultList {
    constructor (
        public responseStatusCode : number,
        public Textbooks : UserAdvertTextbookResult[]
    ){}
}

export class UserAdvertAccomodationResult {
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

export class UserAdvertAccomodationResultList {
    constructor (
        public responseStatusCode : number,
        public Accomodations : UserAdvertAccomodationResult[]
    ){}
}

export class UserAdvertTutorResult {
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

export class UserAdvertTutorResultList {
    constructor (
        public responseStatusCode : number,
        public Tutors : UserAdvertTutorResult[]
    ){}
}

export class UserAdvertNoteResult {
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

export class UserAdvertNoteResultList {
    constructor (
        public responseStatusCode : number,
        public Notes : UserAdvertNoteResult[]
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






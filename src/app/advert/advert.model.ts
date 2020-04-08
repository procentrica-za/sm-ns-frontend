
export class ImageUploadedResult {
    constructor(
    public  ImageInserted: boolean,  
    public  Message:       string 
    ){}
}
export class AddAccomodationResult {
    constructor (
        public responseStatusCode: number,
        public accomodationadded: boolean,
        public id: string,
        public message: string
   ){}
}

export class AddTutorResult {
    constructor (
        public responseStatusCode: number,
        public tutoradded: boolean,
        public id: string,
        public message: string
   ){}
}

export class AddNoteResult {
    constructor (
        public responseStatusCode: number,
        public noteadded: boolean,
        public id: string,
        public message: string
   ){}
}

export class AddAdvertisementResult {
    constructor(
        public responseStatusCode: number,
        public advertisementposted: boolean,
        public id: string,
        public message: string
    ){}
}

export class UpdateAdvertisementResult {
    constructor(
        public responseStatusCode: number,
        public advertisementUpdated: boolean,
        public message: string
    ){}
}

export class DeleteAdvertisementResult {
    constructor(
        public responseStatusCode: number,
        public advertisementDeleted: boolean,
        public advertisementID : string,
        public message: string
    ){}
}


export class Textbook {
    constructor(
        public responseCode : number,
        public modulecode : string,
        public ID : string,
        public name : string,
        public edition : string,
        public quality : string,
        public author : string
    ){}
}

export class TextbookList {
    constructor(
        public responseCode : number,
        public Textbooks : Textbook[]
    ){}
}

export class UploadImage {
    constructor(
        public entityid: string,
        public ismainimage: boolean,
        public imagebytes: string
    ){}
}


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

export class UploadTextbookResult {
    constructor (
        public responseStatusCode : number,
        public textbookadded : boolean,
        public textbookid : string,
        public message : string,
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

export class ModuleCode {
    constructor(
        public responseStatusCode : number,
        public code : string
    ){}
}

export class ModuleCodeList {
    constructor(
        public responseStatusCode : number,
        public ModuleCodes : ModuleCode[]
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
        public price : string,
        public title : string,
        public description : string,
        public message : string,
        public messagedate : string,
        public isread : string,
        public messageauthor : string,

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

export class StartChatResult {
    constructor (
        public responseStatusCode: number,
        public chatposted: boolean, 
        public chatID:      string, 
        public message:     string 
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

export class UnreadChatsResult {
    constructor (
        public responseStatusCode: number,
        public unreadmessages: boolean, 
    ){}
}

export class DeleteChatResult {
    constructor (
        public responseStatusCode: number,
        public chatposted: boolean, 
        public message : string,
    ){}
}

export class OutstandingRatingResult {
    constructor (
        public responseStatusCode: number,
        public outstandingratings: boolean, 
    ){}
}

export class BuyingAverageResult {
    constructor(
        public responseStatusCode : number,
        public average : string
    ){}
}
export class SellingAverageResult {
    constructor(
        public responseStatusCode : number,
        public average : string
    ){}
}









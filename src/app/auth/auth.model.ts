export class LoginResult {
    constructor (
        public responseStatusCode: number,
        public loginAttemptMessage: string,
        public loginUser: LoginUser
    ){}
}

export class LoginUser {
    constructor (
        public id: string,
        public username: string,
        public loggedIn: boolean,
    ){}
}

export class ForgotPasswordResult {
    constructor (
        public responseStatusCode: number,
        public forgotpasswordAttemptMessage: string,
        public msg: string
    ){}
}



export class RegisterResult {
    constructor (
        public responseStatusCode: number,
        public UserCreated: string, 
        public Username:    string,
        public UserID:      string, 
        public Message:     string 
    ){}
}



export class GetUserResult {
    constructor (
        public responseStatusCode: number,
        public UserID:      string,
        public Username:    string,
        public Name:        string,
        public Surname:     string,
        public Email:       string,
        public Institutionname: string,
        public Message:     string,
        public GotUser:     boolean, 
    ){}
}


export class UpdateUserResult {
    constructor (
        public responseStatusCode: number,
        public UserUpdated:     boolean,
        public Message:    string,
         
    ){}
}

export class UpdatePasswordResult {
    constructor (
        public responseStatusCode: number,
        public PasswordUpdated:     boolean,
        public Message:    string,
         
    ){}
}

export class InstitutionName {
    constructor(
        public responseStatusCode : number,
        public institutionname : string
    ){}
}

export class InstitutionNameList {
    constructor(
        public responseStatusCode : number,
        public InstitutionNames : InstitutionName[]
    ){}
}
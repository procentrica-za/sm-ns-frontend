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
        public forgotpasswordUser: ForgotPasswordUser
    ){}
}

export class ForgotPasswordUser {
    constructor (
        public msg: string
    ){}
}
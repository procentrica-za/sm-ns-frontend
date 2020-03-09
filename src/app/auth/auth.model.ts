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
export class LoginResult {
    constructor (
        public responseStatusCode: number,
        public loginAttemptMessage: string,
        public loginUser: LoginUser
    ){}
}

export class LoginUser {
    constructor (
        public username: string,
        public userExists: string,
        public entityType: string
    ){}
}
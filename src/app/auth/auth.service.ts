import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginResult, LoginUser, ForgotPasswordResult, RegisterResult } from './auth.model';

import { HttpClient } from '@angular/common/http';
import { request } from "tns-core-modules/http";

import { getString, setString } from "tns-core-modules/application-settings";

@Injectable({ providedIn: 'root' })

export class AuthService {
    private _currentLogin = new BehaviorSubject<LoginResult>(null)
    private _currentForgotPassword = new BehaviorSubject<ForgotPasswordResult>(null)
    private _currentRegister = new BehaviorSubject<RegisterResult>(null)

    get currentLogin() {
        return this._currentLogin.asObservable();
    }

    get currentForgotPassword() {
        return this._currentForgotPassword.asObservable();
    }

    get currentRegister() {
        return this._currentRegister.asObservable();
    }

    constructor(private http: HttpClient){
        setString("sm-service-cred-manager-host", "http://10.10.100.151:8888");
    }

    validateCredentials(username: string, password: string) {
        const reqUrl = getString("sm-service-cred-manager-host") + "/userlogin?username=" + username + "&password=" + password;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const loginResultErr = new LoginResult(500, "TODO", null);
                this._currentLogin.next(loginResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const loginResult = new LoginResult(200, result.message, new LoginUser(result.id, result.username, result.userloggedin));
                this._currentLogin.next(loginResult);                
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
    }

    ResetPassword(email: string) {
        const reqUrl = getString("sm-service-cred-manager-host") + "/forgotpassword?email=" + email;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const forgotpasswordResultErr = new ForgotPasswordResult(500, "Error", "An internal error has occured");
                this._currentForgotPassword.next(forgotpasswordResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const forgotpasswordResult = new ForgotPasswordResult(200, "Success", result.message);
                this._currentForgotPassword.next(forgotpasswordResult);                
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
    }

    RegisterNewUser(username: string, password: string, name: string, surname: string, email: string) {
        const reqUrl = getString("sm-service-cred-manager-host") + "/user" ;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ username: username, password: password, name: name , surname: surname, email: email }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const RegisterResultErr = new RegisterResult(500, "false", 'none', '00000000-0000-0000-0000-000000000000', 'none');
                this._currentRegister.next(RegisterResultErr);
            } else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                const result = response.content.toJSON();
                const RegistersuccessResult = new RegisterResult(200, result.usercreated, result.username, result.id, result.message);
                this._currentRegister.next(RegistersuccessResult);   
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    }  

    //This method clears all results
    clearAllObjects(){
        this._currentLogin = null;
        this._currentForgotPassword = null;
    }

}
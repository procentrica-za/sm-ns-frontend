import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginResult, LoginUser } from './auth.model';

import { HttpClient } from '@angular/common/http';
import { request } from "tns-core-modules/http";

import { getString, setString } from "tns-core-modules/application-settings";

@Injectable({ providedIn: 'root' })

export class AuthService {
    private _currentLogin = new BehaviorSubject<LoginResult>(null)
    
    get currentLogin() {
        return this._currentLogin.asObservable();
    }

    constructor(private http: HttpClient){
        setString("sm-service-cred-manager-host", "http://10.10.100.155:8888");
    }

    validateCredentials(username: string, password: string) {
        const reqUrl = getString("sm-service-cred-manager-host") + "/userlogin?username=" + username + "&password=" + password;
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
                const loginResult = new LoginResult(200, result.message, new LoginUser(result.username, result.userexists, result.entitytype));
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

}
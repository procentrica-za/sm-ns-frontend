import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginResult, LoginUser, ForgotPasswordResult, RegisterResult, GetUserResult, UpdateUserResult, UpdatePasswordResult, InstitutionName, InstitutionNameList} from './auth.model';

import { HttpClient } from '@angular/common/http';
import { request } from "tns-core-modules/http";

import { getString, setString } from "tns-core-modules/application-settings";

@Injectable({ providedIn: 'root' })

export class AuthService {
    private _currentLogin = new BehaviorSubject<LoginResult>(null)
    private _currentForgotPassword = new BehaviorSubject<ForgotPasswordResult>(null)
    private _currentRegister = new BehaviorSubject<RegisterResult>(null)
    private _currentGetUser = new BehaviorSubject<GetUserResult>(null)
    private _currentUpdateUser = new BehaviorSubject<UpdateUserResult>(null)
    private _currentUpdatePassword = new BehaviorSubject<UpdatePasswordResult>(null)
    private _currentInstitutionName = new BehaviorSubject<InstitutionName>(null);
    private _currentInstitutionNameList = new BehaviorSubject<InstitutionNameList>(null);

    get currentLogin() {
        return this._currentLogin.asObservable();
    }

    get currentForgotPassword() {
        return this._currentForgotPassword.asObservable();
    }

    get currentRegister() {
        return this._currentRegister.asObservable();
    }

    get currentGetUser() {
        return this._currentGetUser.asObservable();
    }

    get currentUpdateUser() {
        return this._currentUpdateUser.asObservable();
    }

    get currentUpdatePassword() {
        return this._currentUpdatePassword.asObservable();
    }

    get currentInstitutionName(){
        return this._currentInstitutionName.asObservable();
    }

    get currentInstitutionNameList(){
        return this._currentInstitutionNameList.asObservable();
    }
   


    constructor(private http: HttpClient){
        setString("sm-service-cred-manager-host", "http://192.168.1.174:9952");
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
                const loginResultErr = new LoginResult(500, "Login Unsuccessful", null);
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
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const forgotpasswordResultErr = new ForgotPasswordResult(500, "Error", "An internal error has occured.");
                this._currentForgotPassword.next(forgotpasswordResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const forgotpasswordResult = new ForgotPasswordResult(200, "Success", result.message);
                this._currentForgotPassword.next(forgotpasswordResult);                
            } else {
                const forgotpasswordResult = new ForgotPasswordResult(responseCode, "Error", response.content.toString());
                this._currentForgotPassword.next(forgotpasswordResult); 
            }
        }, (e) => {

            const forgotpasswordResult = new ForgotPasswordResult(400, "Error", "An Error has been recieved, please contact support.");
                this._currentForgotPassword.next(forgotpasswordResult); 
        });
    }

    RegisterNewUser(username: string, password: string, name: string, surname: string, email: string, institutionname: string) {
        const reqUrl = getString("sm-service-cred-manager-host") + "/user" ;
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ username: username, password: password, name: name , surname: surname, email: email, institutionname: institutionname }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const RegisterResultErr = new RegisterResult(500, "false", 'none', '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                this._currentRegister.next(RegisterResultErr);
            } else if (responseCode === 200) {

                const result = response.content.toJSON();
                const RegistersuccessResult = new RegisterResult(200, result.usercreated, result.username, result.id, result.message);
                this._currentRegister.next(RegistersuccessResult);   
            } else {
                const RegistersuccessResult = new RegisterResult(responseCode, "false","none",  '00000000-0000-0000-0000-000000000000', response.content.toString());
                this._currentRegister.next(RegistersuccessResult); 
            }
        }, (e) => {

            const RegistersuccessResult = new RegisterResult(400, "false","none",  '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                this._currentRegister.next(RegistersuccessResult); 
        });
        return null;
    }  

    GetUser(id: string) {
        const reqUrl = getString("sm-service-cred-manager-host") + "/user?id="  + id;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const getuserResultErr = new GetUserResult(500, "00000000-0000-0000-0000-000000000000", "Unable to retrieve username","Unable to retrieve name", "Unable to retrieve surname", "Unable to retrieve email address", "Unable to retireve institution", "Unaable to retrieve ads remaining", "Error whilst trying to recieve user details.", false);
                this._currentGetUser.next(getuserResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const getuserResult = new GetUserResult(200, result.id, result.username, result.name, result.surname, result.email, result.institutionname, result.adsremaining, result.message, result.gotuser);
                this._currentGetUser.next(getuserResult);                
            } else {
                const getuserResult = new GetUserResult(responseCode, '00000000-0000-0000-0000-000000000000',"none", "none", "none", "none", "none", "none", response.content.toString(), false);
                this._currentGetUser.next(getuserResult); 
            }
        }, (e) => {

            const getuserResult = new GetUserResult(400, '00000000-0000-0000-0000-000000000000',"none", "none", "none", "none", "none", "none", "An Error has been recieved, please contact support.", false);
            this._currentGetUser.next(getuserResult); 
        });
    }

    UpdateUser(id: string, username: string, name: string, surname: string, email: string, institutionname: string) {
        const reqUrl = getString("sm-service-cred-manager-host") + "/user" ;
        request ({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: id,  username: username, name: name , surname: surname, email: email, institutionname: institutionname }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const UpdateResultErr = new UpdateUserResult(500, false, 'An error has occured whilst trying to connect.',);
                this._currentUpdateUser.next(UpdateResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const UpdatesuccessResult = new UpdateUserResult(200, result.userupdated, result.message);
                this._currentUpdateUser.next(UpdatesuccessResult);
            } else {
                const UpdatesuccessResult = new UpdateUserResult(responseCode, false, response.content.toString());
                this._currentUpdateUser.next(UpdatesuccessResult); 
            }
        }, (e) => {

            const UpdatesuccessResult = new UpdateUserResult(400, false, "An Error has been recieved, please contact support.");
            this._currentUpdateUser.next(UpdatesuccessResult);
        });

    }

    UpdatePassword(id: string, currentpassword: string, password: string ) {
        const reqUrl = getString("sm-service-cred-manager-host") + "/userpassword" ;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: id, currentpassword: currentpassword, password: password }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const UpdateResultErr = new UpdatePasswordResult(500, false, 'An error has occured whilst trying to connect.',);
                this._currentUpdatePassword.next(UpdateResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const UpdatesuccessResult = new UpdatePasswordResult(200, result.passwordupdated, result.message);
                this._currentUpdatePassword.next(UpdatesuccessResult);
            } else {
                const UpdatesuccessResult = new UpdatePasswordResult(responseCode, false, response.content.toString());
                this._currentUpdatePassword.next(UpdatesuccessResult); 
            }
        }, (e) => {
            const UpdatesuccessResult = new UpdatePasswordResult(400, false, "An Error has been recieved, please contact support.");
            this._currentUpdatePassword.next(UpdatesuccessResult); 
        });

    }

    initializeInstitutionNameList(){
        const reqUrl = getString("sm-service-cred-manager-host") + "/institution"
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500){
                const institutionnameErr = new InstitutionName(500, null);
            }else if(responseCode === 200){
                const result = response.content.toJSON();
                let institutionnameList: InstitutionName[] = [];
                const JSONInstitutionNameList = result.institutionnames;
                JSONInstitutionNameList.forEach(element => {
                    element.responseStatusCode = 200;
                    institutionnameList.push(element);
                });
                const toNextList = new InstitutionNameList(200, institutionnameList);
                this._currentInstitutionNameList.next(toNextList);
            }else {
                console.log("in the else");
            }
        }, (e) => {
            console.log(e);
        });

    }
    
    //This method clears all results
    clearAllObjects(){
        this._currentLogin = new BehaviorSubject<LoginResult>(null);
    }
    
    clearUserDetails(){
        this._currentUpdateUser = new BehaviorSubject<UpdateUserResult>(null)
        this._currentUpdatePassword = new BehaviorSubject<UpdatePasswordResult>(null)
    
    }

    clearLoginObject() {
        this._currentLogin = new BehaviorSubject<LoginResult>(null);
    }

    clearRegistration() {
        this._currentRegister = new BehaviorSubject<RegisterResult>(null)
        this._currentForgotPassword = new BehaviorSubject<ForgotPasswordResult>(null)
    }

}
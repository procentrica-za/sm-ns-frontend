import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginResult, LoginUser, ForgotPasswordResult, RegisterResult, GetUserResult, UpdateUserResult, UpdatePasswordResult, InstitutionName, InstitutionNameList, GetOTPResult, GetNewOTPResult, ValidateOTPResult, IsVerifiedResult, RefreshResult, GetScimIDResult} from './auth.model';
import { HttpClient } from '@angular/common/http';
import { request } from "tns-core-modules/http";

import { getString, setString } from "tns-core-modules/application-settings";
import * as appSettings from "tns-core-modules/application-settings";
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
    private _currentGetotp = new BehaviorSubject<GetOTPResult>(null)
    private _currentValidateotp = new BehaviorSubject<ValidateOTPResult>(null)
    private _currentGetnewotp = new BehaviorSubject<GetNewOTPResult>(null)
    private _currentIsverified = new BehaviorSubject<IsVerifiedResult>(null)
    private _currentRefresh = new BehaviorSubject<RefreshResult>(null)
    private _currentGetScimID = new BehaviorSubject<GetScimIDResult>(null)

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

    get currentGetotp() {
        return this._currentGetotp.asObservable();
    }

    get currentValidateotp() {
        return this._currentValidateotp.asObservable();
    }

    get currentGetnewotp() {
        return this._currentGetnewotp.asObservable();
    }

    get currentIsVerified() {
        return this._currentIsverified.asObservable();
    }

    get currentRefresh() {
        return this._currentRefresh.asObservable();
    }

    get currentGetScimID() {
        return this._currentGetScimID.asObservable();
    }


    constructor(private http: HttpClient){
        console.log("Initializing app SM... Backend address: " + getString("sm-service-cred-manager-host"));
    }

    validateCredentials(username: string, password: string) {
        appSettings.setString("username", username);
        appSettings.setString("password", password);             
        const reqUrl = getString("sm-service-scim-manager-host") + "/scim/v1.0/login";
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ username: username, password: password}),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const loginResultErr = new LoginResult(500, "Login Unsuccessful", null);
                this._currentLogin.next(loginResultErr);
            } else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.validateCredentials(username, password);
                }
                
                else {
                    const loginResultErr = new LoginResult(500, "Login Unsuccessful", null);
                this._currentLogin.next(loginResultErr);  
                }
        
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const loginResult = new LoginResult(200, result.message, new LoginUser(result.id, result.username, result.institution, result.userloggedin, result.access_token, result.refresh_token));
                this._currentLogin.next(loginResult);   
                appSettings.setString("accesstoken", result.access_token);
                appSettings.setString("refreshtoken", result.refresh_token);             
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
        const scimid = appSettings.getString("scimid");   
        const reqUrl = getString("sm-service-scim-manager-host") + "/scim/v1.0/forgotpassword?email=" + email + "&scimid=" + scimid;
        const accesstoken = appSettings.getString("accesstoken");
        request ({
            url: reqUrl,
            method: "GET",
            headers: { "Authorization": "Bearer " + accesstoken},
            timeout: 60000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const forgotpasswordResultErr = new ForgotPasswordResult(500, "Error", "An internal error has occured.");
                this._currentForgotPassword.next(forgotpasswordResultErr);
            } else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.ResetPassword(email);
                }
                
                else {
                    const forgotpasswordResultErr = new ForgotPasswordResult(500, "Error", "An internal error has occured.");
                    this._currentForgotPassword.next(forgotpasswordResultErr); 
                }
        
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
        const clientkey = appSettings.getString("clientkey");
        const reqUrl = getString("sm-service-scim-manager-host") + "/scim/v1.0/user" ;
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ username: username, password: password, name: name , surname: surname, email: email, institutionname: institutionname, keysecret: clientkey }),
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
            }
            else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.RegisterNewUser(username, password, name, surname, email, institutionname);
                }
                
                else {
                    const RegisterResultErr = new RegisterResult(500, "false", 'none', '00000000-0000-0000-0000-000000000000', 'An internal error has occured.'); 
                    this._currentRegister.next(RegisterResultErr);   
                }
        
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
        const reqUrl = getString("sm-service-cred-manager-host") + "/user/v1.0/user?id="  + id;
        const accesstoken = appSettings.getString("accesstoken");
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            headers: { "Authorization": "Bearer " + accesstoken},
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
                this.GetScimID()                      
            } else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.GetUser(id);
                }
                
                else {
                    const getuserResultErr = new GetUserResult(500, "00000000-0000-0000-0000-000000000000", "Unable to retrieve username","Unable to retrieve name", "Unable to retrieve surname", "Unable to retrieve email address", "Unable to retireve institution", "Unaable to retrieve ads remaining", "Error whilst trying to recieve user details.", false);
                    this._currentGetUser.next(getuserResultErr);    
                }
        
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
        const scimid = appSettings.getString("scimid");  
        const reqUrl = getString("sm-service-scim-manager-host") + "/scim/v1.0/user" ;
        const accesstoken = appSettings.getString("accesstoken");
        request ({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" , "Authorization": "Bearer " + accesstoken },
            content: JSON.stringify({ id: id, scimid: scimid,  username: username, name: name , surname: surname, email: email, institutionname: institutionname }),
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
            } else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.UpdateUser(id, username, name, surname, email, institutionname);
                }
                
                else {
                    const UpdateResultErr = new UpdateUserResult(500, false, 'An error has occured whilst trying to connect.',);
                this._currentUpdateUser.next(UpdateResultErr);   
                }
        
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
        const scimid = appSettings.getString("scimid");  
        const reqUrl = getString("sm-service-scim-manager-host") + "/scim/v1.0/userpassword" ;
        const accesstoken = appSettings.getString("accesstoken");
        const username = appSettings.getString("username");
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + accesstoken },
            content: JSON.stringify({ id: id, scimid: scimid, username: username, currentpassword: currentpassword, password: password }),
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
        const reqUrl = getString("sm-service-cred-manager-host") +'/user/v1.0/institution' ;
        const accesstoken = appSettings.getString("accesstoken");
        console.log(reqUrl)
        request ({
            url: reqUrl,
            method: "GET",
            headers: { "Authorization": "Bearer " + accesstoken},
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
            } else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.initializeInstitutionNameList();
                }
                
                else {
                    const institutionnameErr = new InstitutionName(500, null); 
                }
        
            } else {
                console.log("in the else");
            }
        }, (e) => {
            console.log(e);
        });

    }

    GetOtp(phonenumber: string) {
        const userid = appSettings.getString("userid");
        const accesstoken = appSettings.getString("accesstoken");
        const reqUrl = getString("sm-service-cred-manager-host") + "/user/v1.0/otp?userid=" + userid + "&phonenumber=" + phonenumber;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            headers: { "Authorization": "Bearer " + accesstoken},
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const getotpResultErr = new GetOTPResult(500, false, "An internal error has occured.");
                this._currentGetotp.next(getotpResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const getotpResult = new GetOTPResult(200, result.sent, result.Message);
                this._currentGetotp.next(getotpResult);                
            } else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.GetOtp(phonenumber);
                }
                
                else {
                const getotpResultErr = new GetOTPResult(500, false, "An internal error has occured.");
                this._currentGetotp.next(getotpResultErr);  
                }
        
            } else {
                const getotpResult = new GetOTPResult(responseCode, false, response.content.toString());
                this._currentGetotp.next(getotpResult); 
            }
        }, (e) => {

            const getotpResult = new GetOTPResult(400, false, "An Error has been recieved, please contact support.");
                this._currentGetotp.next(getotpResult); 
        });
    }

    GetNewOtp() {
        const userid = appSettings.getString("userid");
        const phonenumber = appSettings.getString("phonenumber");
        const reqUrl = getString("sm-service-cred-manager-host") + "/user/v1.0/newotp?userid=" + userid + "&phonenumber=" + phonenumber;
        const accesstoken = appSettings.getString("accesstoken");
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            headers: { "Authorization": "Bearer " + accesstoken},
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const getnewotpResultErr = new GetNewOTPResult(500, false, "An internal error has occured.");
                this._currentGetnewotp.next(getnewotpResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const getnewotpResult = new GetNewOTPResult(200, result.sent, result.Message);
                this._currentGetnewotp.next(getnewotpResult);                
            } else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.GetNewOtp();
                }
                
                else {
                    const getnewotpResultErr = new GetNewOTPResult(500, false, "An internal error has occured.");
                    this._currentGetnewotp.next(getnewotpResultErr);
                }
        
            } else {
                const getnewotpResult = new GetNewOTPResult(responseCode, false, response.content.toString());
                this._currentGetnewotp.next(getnewotpResult); 
            }
        }, (e) => {

            const getnewotpResult = new GetNewOTPResult(400, false, "An Error has been recieved, please contact support.");
                this._currentGetnewotp.next(getnewotpResult); 
        });
    }

    ValidateOtp(otp: string) {
        const userid = appSettings.getString("userid");
        const reqUrl = getString("sm-service-cred-manager-host") + "/user/v1.0/otp";
        const accesstoken = appSettings.getString("accesstoken");
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + accesstoken },
            content: JSON.stringify({ userid: userid, otp: otp}),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const validateotpResultErr = new ValidateOTPResult(500, false, "An internal error has occured.");
                this._currentValidateotp.next(validateotpResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const validateotpResult = new ValidateOTPResult(200, result.validated, result.Message);
                this._currentValidateotp.next(validateotpResult);                
            } else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.ValidateOtp(otp);
                }
                
                else {
                const validateotpResultErr = new ValidateOTPResult(500, false, "An internal error has occured.");
                this._currentValidateotp.next(validateotpResultErr);
                }
        
            } else {
                const validateotpResult = new ValidateOTPResult(responseCode, false, response.content.toString());
                this._currentValidateotp.next(validateotpResult); 
            }
        }, (e) => {

            const validateotpResult = new ValidateOTPResult(400, false, "An Error has been recieved, please contact support.");
                this._currentValidateotp.next(validateotpResult); 
        });
    }

    VerificationStatus() {
        const userid = appSettings.getString("userid");
        const reqUrl = getString("sm-service-cred-manager-host") + "/user/v1.0/status?userid=" + userid;
        const accesstoken = appSettings.getString("accesstoken");
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            headers: { "Authorization": "Bearer " + accesstoken },
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const isverifiedResultErr = new IsVerifiedResult(500, false);
                this._currentIsverified.next(isverifiedResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const isverifiedResult = new IsVerifiedResult(200, result.isverified);
                this._currentIsverified.next(isverifiedResult);                
            }  else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.VerificationStatus();
                }
                
                else {
                    const isverifiedResultErr = new IsVerifiedResult(500, false);
                    this._currentIsverified.next(isverifiedResultErr);
                }
        
            } else {
                const isverifiedResult = new IsVerifiedResult(responseCode, false);
                this._currentIsverified.next(isverifiedResult); 
            }
        }, (e) => {

            const isverifiedResult = new IsVerifiedResult(400, false);
                this._currentIsverified.next(isverifiedResult); 
        });
    }

    RefreshTokens():boolean{
        const reqUrl = getString("sm-service-cred-manager-host") +'/token';
        const refreshtoken = appSettings.getString("refreshtoken");
        const clientkey = appSettings.getString("clientkey");
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" , "Authorization": "Basic " + clientkey },
            content: "grant_type=refresh_token&refresh_token=" + refreshtoken,
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const RefreshResultErr = new RefreshResult(400, "00000000-0000-0000-0000-000000000000",'00000000-0000-0000-0000-000000000000');
                this._currentRefresh.next(RefreshResultErr);
                return false;
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const RefreshsuccessResult = new RefreshResult(200, result.access_token, result.refresh_token);
                this._currentRefresh.next(RefreshsuccessResult);
                appSettings.setString("accesstoken", result.access_token);
                appSettings.setString("refreshtoken", result.refresh_token);
                return true;   
            } else {
                const RefreshsuccessResult = new RefreshResult(responseCode,"00000000-0000-0000-0000-000000000000",'00000000-0000-0000-0000-000000000000');
                this._currentRefresh.next(RefreshsuccessResult); 
                return false;
            }
        }, (e) => {

            const RefreshsuccessResult = new RefreshResult(500,"00000000-0000-0000-0000-000000000000",'00000000-0000-0000-0000-000000000000');
                this._currentRefresh.next(RefreshsuccessResult); 
        });
        return true;
    }  

    GetScimID() {
        const username = appSettings.getString("username");
        const basicauth = appSettings.getString("basicauth");
        const reqUrl = getString("sm-service-cred-manager-host") + "/wso2/scim/Users?filter=userName+Eq+%22"+username+"%22";
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            headers: { "Authorization": "Basic " + basicauth},
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const getuserResultErr = new GetScimIDResult(500, "00000000-0000-0000-0000-000000000000");
                this._currentGetScimID.next(getuserResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const getuserResult = new GetScimIDResult(200,result.Resources.id);
                this._currentGetScimID.next(getuserResult);
                appSettings.setString("scimid", result.Resources.id);                
            }  else {
                const getuserResult = new GetScimIDResult(responseCode, '00000000-0000-0000-0000-000000000000');
                this._currentGetScimID.next(getuserResult); 
            }
        }, (e) => {

            const getuserResult = new GetScimIDResult(400, '00000000-0000-0000-0000-000000000000');
            this._currentGetScimID.next(getuserResult); 
        });
    }

    RememberMe() {
        const username = appSettings.getString("username");
        const password = appSettings.getString("password");             
        const reqUrl = getString("sm-service-scim-manager-host") + "/scim/v1.0/login";
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ username: username, password: password}),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const loginResultErr = new LoginResult(500, "Login Unsuccessful", null);
                this._currentLogin.next(loginResultErr);
            } else if (responseCode === 401) {
                this.RefreshTokens();
                const success = this.RefreshTokens();
                
                if(success == true) {
                this.validateCredentials(username, password);
                }
                
                else {
                    const loginResultErr = new LoginResult(500, "Login Unsuccessful", null);
                this._currentLogin.next(loginResultErr);  
                }
        
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const loginResult = new LoginResult(200, result.message, new LoginUser(result.id, result.username, result.institution, result.userloggedin, result.access_token, result.refresh_token));
                this._currentLogin.next(loginResult);   
                appSettings.setString("accesstoken", result.access_token);
                appSettings.setString("refreshtoken", result.refresh_token);             
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
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

    clearOTPObject() {
        this._currentGetotp = new BehaviorSubject<GetOTPResult>(null);
    }

    clearNewOTPObject() {
        this._currentGetnewotp = new BehaviorSubject<GetNewOTPResult>(null);
    }

    clearValidateOTPObject() {
        this._currentValidateotp = new BehaviorSubject<ValidateOTPResult>(null);
    }
}
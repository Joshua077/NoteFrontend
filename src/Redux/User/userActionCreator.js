import {  USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,USER_LOGOUT, USER_REGISTRATION_FAIL, USER_REGISTRATION_REQUEST, USER_REGISTRATION_SUCCESS } from "./userActions"



export function RegistrationRequest( ){
    return{
        type: USER_REGISTRATION_REQUEST,
    }
}

export function RegistrationSuccess( data){
    return{
        type: USER_REGISTRATION_SUCCESS,
        payload : data,
    }
}

export function RegistrationFail(error){
    return{
        type: USER_REGISTRATION_FAIL,
        payload : error,
    }
}
export function LoginRequest( ){
    return{
        type:  USER_LOGIN_REQUEST,
    }
}

export function LoginSuccess( data){
    return{
        type: USER_LOGIN_SUCCESS,
        payload : data,
    }
}

export function LoginFail(error){
    return{
        type: USER_LOGIN_FAIL,
        payload : error,
    }
}

export function LoginOut(){
    return{
        type: USER_LOGOUT,
       
    }
}

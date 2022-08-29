import { USER_REGISTRATION_FAIL, USER_REGISTRATION_REQUEST,USER_REGISTRATION_SUCCESS, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,USER_LOGOUT } from "./userActions"


const initialState ={
    loading:false,
    data:{},
    error:null,
    login: false,
    registered : false
}
export function userLogin (state = initialState, action) {
switch(action.type) {
    case USER_LOGIN_REQUEST:
         return{
            ...state,
           
            loading : true,
    }
    case USER_LOGIN_SUCCESS :
        return {
            ...state,
            login: true,
            loading:false,
            data : action.payload
        }
case USER_LOGIN_FAIL:{
    return{
        ...state,
        loading:false,
        error : action.payload
    }
}
case USER_LOGOUT:{
    return{
        
    }
}

    default:
        return state
}
} 

export function userRegistration (state = initialState, action) {
    switch(action.type) {
        case USER_REGISTRATION_REQUEST:
             return{
                ...state,
                loading : true,
        }
        case  USER_REGISTRATION_SUCCESS :
            return {
                ...state,
                registered : true,
                loading:false,
                data : action.payload
            }
    case USER_REGISTRATION_FAIL:{
        return{
            ...state,
            loading:false,
            error : action.payload
        }
    }
        default:
            return state
    }
    } 
    
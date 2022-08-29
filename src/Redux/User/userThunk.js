import { LoginFail, LoginOut, LoginRequest, LoginSuccess, RegistrationFail, RegistrationRequest, RegistrationSuccess } from "./userActionCreator"
import axios from "axios";

export const UserLoginThunk =  (email, password) => async(dispatch) => {
dispatch(LoginRequest())
const userData = {
    email,password
}
try{
    const config ={
        headers: {
            "Content-Type": "application/json"
        }
    };
    const {data}= await axios.post('/api/v1/users/login', userData,config);
        
    localStorage.setItem('userDetails', JSON.stringify(data));
    
           dispatch(LoginSuccess(data))
  

}catch(err){
    dispatch(LoginFail(err.response.data.message))

}
}
export const UserLogOutThunk =  () => async(dispatch) => {

   
               localStorage.removeItem('userDetails');
               dispatch(LoginOut())
        
    }

    export const UserRegistrationThunk =  (email,password,name,pic) => async(dispatch) => {
        dispatch(RegistrationRequest())
        const userData = {
            email,password,name,pic
        }
        try{
            const config ={
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const {data}= await axios.post('/api/v1/users/login', userData,config);
                
            localStorage.setItem('userDetails', JSON.stringify(data));
            
                   dispatch(RegistrationSuccess(data))
          
        
        }catch(err){
            dispatch(RegistrationFail(err.response.data.message))
        
        }
        }
       
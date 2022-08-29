
import axios from 'axios';
import React, {useEffect, useState}from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import MainScreen from '../../UI/Main Screen';
import { useDispatch, useSelector } from "react-redux";
import { UserLoginThunk } from '../../Redux/User/userThunk';
import { NoteListThunk } from '../../Redux/Notes/NoteThunk';

export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.Login);
  const { loading, error, data,login } = userLogin;

    
    useEffect(()=>{
        
if(login){
history('/mynotes')
}

    }, [history,login])
 
// const userData = {
//     email,password
// }
    const handleSubmit = async(e) =>{
        e.preventDefault();
       dispatch(UserLoginThunk(email,password))
        // try{
        //     const config ={
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     };
        //     setIsLoading(true);
        //     const {data}= await axios.post('/api/v1/users/login', userData,config);
        //    localStorage.setItem('userDetails', JSON.stringify(data));
        //    console.log(data);
        // }catch(err){
        //     console.log(err.response.data.message)
        //     setError(err.response.data.message)
        // }finally{  
        //     setIsLoading(false);

        //  }
         
    
 }
    return (
        <>
        <MainScreen title= "Login">
<Form onSubmit={handleSubmit} >
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange= {(e)=>setPassword(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
</Form>

<span>New Student </span> <Link to="/register">Register</Link>
        </MainScreen>
            
        </>
    )
}

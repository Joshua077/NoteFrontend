import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'
import { UserRegistrationThunk } from '../../Redux/User/userThunk'
import MainScreen from '../../UI/Main Screen'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
export default function Register(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [pic, setPic] = useState( "")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errors, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [picMessage, setPicMessage] = useState(null);
    const history = useNavigate();
    const dispatch = useDispatch();

    const userRegistration = useSelector((state) => state.Registration);
    const { loading, error, data,login,  registered } = userRegistration;
  
    useEffect(()=>{
        
      if(registered){
      history('/mynotes')
      }
          }, [history,  registered])
    const postDetails = (pics) => {
        if (
          pics ===
          ""
        ) {
          return setPicMessage("Please Select an Image");
        }
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "student");
          data.append("cloud_name", "matthewjoshua05");
          fetch("https://api.cloudinary.com/v1_1/matthewjoshua056/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              setPic(data.url.toString());
              console.log(data,"success");
            })
            .catch((err) => {
              console.log(err, "error");
            });
        } else {
          return setPicMessage("Please Select an Image");
        }
      };
    const handleSubmit = async (e) =>{

e.preventDefault();
const userData = {
    email,password,name,pic
}
console.log(userData, "Data")
if(password !== confirmpassword){
  setMessage(true)
  console.log("Please enter your password")
}else{
  dispatch(UserRegistrationThunk(email,password,name,pic))
}
    }
    return (
        <>
         <MainScreen title="Register">
         <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name"  value={name}
              
              onChange={(e) => setName(e.target.value)} />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email}
              
              onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
              
              onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control type="password" placeholder=" Confirm Password" value={confirmpassword}
              
              onChange={(e) => setConfirmpassword(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>profile Picture</Form.Label>
        <Form.Control type="file"   onChange={(e) => postDetails(e.target.files[0])}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            
            </MainScreen> 
        </>
    )
}

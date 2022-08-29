import React , {useEffect}from 'react'
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Landing.css'


export default function LandingPage(props) {
   
  useEffect(() =>{
      
  }, [])

    return (
        <div div className="main">
          <Container>
            <Row>
            <div className="intro-text">
            <div>
             
              <h1 className="title">Welcome to Note Zipper </h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
             
                <Button size="lg" className="landingbutton">
                 <Link to="/login">Login</Link> 
                </Button>
              
              
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  <Link to="/register"> Signup</Link>
                </Button>
             
            </div>
            </div>
            </Row>
          </Container>
        </div>
    )
}

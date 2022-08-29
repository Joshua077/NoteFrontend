import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { UserLogOutThunk } from '../../Redux/User/userThunk';
import { useNavigate } from 'react-router-dom'

export default  function Header(props) {
  const dispatch = useDispatch() 
  const history = useNavigate();
  const logoutNote = (e) =>{
      
      alert('logout');
    dispatch(UserLogOutThunk())
      localStorage.removeItem('userDetails');
      history('/')
    }
  
    return (
        <Navbar bg="primary" expand="lg" variant="dark" >
        <Container >
          <Navbar.Brand >
            <Link to="/">Notes</Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className='m-auto'>
          <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              
            </Form>
          </Nav>
            <Nav
              
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link > <Link to="/mynotes">Students Notes</Link></Nav.Link>
              
              <NavDropdown title="Student Profile" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
               
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutNote}>
                  LogOut
                </NavDropdown.Item>
              </NavDropdown>
             
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

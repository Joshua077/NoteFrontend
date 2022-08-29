import React, {useEffect,useState}from 'react'
import { Accordion, Badge, Button, Card,  } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Link } from 'react-router-dom'
import MainScreen from '../../UI/Main Screen'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { NoteListThunk } from '../../Redux/Notes/NoteThunk';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <span
       
       
        onClick={decoratedOnClick}
      >
        {children}
      </span>
    );
  }

export default  function MyNotes(props) {
  const dispatch = useDispatch();

  const {data:notes} =  useSelector((state)=> state.NoteList)
  
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
         
        }
      };

useEffect(()=>{
  
  dispatch(NoteListThunk())
},[])
    return (
        <MainScreen title="Welcome to ur note screen">
           <Link to="/createnotes">
           <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
           </Link>

           {notes.map(note=> (
            <Accordion defaultActiveKey="0">
             <Card style={{ margin: 10 }}  key={note._id}>
             <Card.Header style={{ display: "flex" }}><span style={{
                             color: "black",
                             textDecoration: "none",
                             flex: 1,
                             cursor: "pointer",
                             alignSelf: "center",
                             fontSize: 18,
                           }}>
                            <CustomToggle eventKey="0"> {note.title} </CustomToggle> 
                           
                    
                   
                    </span>
             <div >
               <Button>
                <Link to={`/note/${note._id}`}>
                Edit
                </Link>
                  
               </Button>
               <Button  variant="danger"
                             className="mx-2"
                             onClick={() => deleteHandler(note._id)}
                             >
                  Delete
               </Button>
             </div>
             </Card.Header>
             <Accordion.Collapse eventKey="0">
             <Card.Body>
             <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
               <blockquote className="blockquote mb-0">
                 <p>
                  {note.content}
                 </p>
              
               </blockquote>
             </Card.Body>
             </Accordion.Collapse>
           </Card>
           </Accordion>
           )
         
           )}


           
          
           
        </MainScreen>
    )
}


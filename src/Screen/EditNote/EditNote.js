import React,{useEffect, useState} from 'react'
import MainScreen from '../../UI/Main Screen'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SingleNoteThunk, UpdateNoteThunk } from '../../Redux/Notes/NoteThunk';
import { Link,useNavigate } from 'react-router-dom'
export default function EditNote(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const Single = useSelector((state) => state.SingleNote.data.message);
  const { title:mytitle, content:mycontent, category:mycategory} = Single;
  const dispatch =  useDispatch()
  const history = useNavigate();
  const { id } = useParams();

useEffect(() => {
dispatch(SingleNoteThunk(id));
setTitle(mytitle);
setCategory(mycategory);
setContent(mycontent);
}, [])

const handleSubmit = () => {
 dispatch(UpdateNoteThunk(id,title,category,content));
history('/mynotes')

};
    return (
        <MainScreen title="Edit Note">

<Card>
        <Card.Header>Edit Note</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                placeholder="Content"
                as="textarea"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              {content && (
                <Card>
                  <Card.Header>Note Preview</Card.Header>
                  <Card.Body>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </Card.Body>
                </Card>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
           
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
            
        </MainScreen>
    )
}

import React, { useState } from "react";
import MainScreen from "../../UI/Main Screen";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { CreateNoteThunk } from "../../Redux/Notes/NoteThunk";
import { Link,useNavigate } from 'react-router-dom'

export default function CreateNotes(props) {
  const final = useSelector((state) => state.CreateNotes)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
   
    dispatch( CreateNoteThunk(title,content, category));
   handleReset();
  //  history('/mynotes')
  console.log(final, "final")
  };

  const handleReset = (state) => {
    setCategory("");
    setTitle("");
    setTitle("");
    
  };
  return (
    <MainScreen title="Create Notes">
      <Card>
        <Card.Header>Create a new Note</Card.Header>
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
            <Button
              variant="danger"
              type="submit"
              className="mx-2"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

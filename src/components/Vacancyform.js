import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Vacancyform.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { current } from "@reduxjs/toolkit";

function Vacancyform(props) {
  let{show,updateHandler,currentJob, setShow, title, setTitle, discription, setDiscription, companyName, setcompanyName,date, setDate, setSalary,salary} = props


  return (
    <div>
      <Modal show={show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="custform">
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Job Title</Form.Label>
                <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Company Name</Form.Label>
                <Form.Control value={companyName} onChange={(e)=>setcompanyName(e.target.value)} />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>salary</Form.Label>
                  <Form.Control type="number" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Date-Time</Form.Label>
                  <Form.Control type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Discription</Form.Label>
                <Form.Control type="text" value={discription} onChange={(e)=>setDiscription(e.target.value)}/>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          {!currentJob?
          <Button variant="primary" onClick={()=>props.submitHandler()}>
          Add
        </Button>:
        <Button variant="success" onClick={()=>updateHandler()}>
            Update
          </Button>
        }
          

          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Vacancyform;

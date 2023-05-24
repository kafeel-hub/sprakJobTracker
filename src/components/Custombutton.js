
import React from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import './Custombutton.css';


function CustomButton(props) {



  return (
    <Dropdown className='justify-content-end d-flex'>
    <Dropdown.Toggle className='custom-toggle-btn' variant="light" id="dropdown-basic">
      {/* Three-dot icon */}
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      {/* Dropdown menu items */}
      <Dropdown.Item onClick={()=>props.editHandler(props.item)} ><i className="bi bi-pencil mx-3 "></i>Edit</Dropdown.Item>
      <Dropdown.Item onClick={()=>props.handleDelete(props.item.id)}href="#action2"><i class="bi bi-trash mx-3"></i> Delete</Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default CustomButton

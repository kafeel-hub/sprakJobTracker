import React from 'react'
import {Card,Image,} from 'react-bootstrap';
import './Vacancycard.css';
import logo from "../assets/img/27184.jpg"
import Custombutton from './Custombutton';



function Vacancycard(props) {

  return (
    <div>
   

    <Card >
      <Card.Body>
        <Custombutton handleDelete={props.handleDelete} item={props.item} editHandler = {props.editHandler} />
      
        <Card.Title>{props.item.title}</Card.Title>
        <div className="card-title-img">
        <Image src={logo} rounded style={{width:'12%'}}></Image>
        <Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:'0.2rem',fontSize:'0.8rem'}} >
          {props.item.companyName}
        </Card.Subtitle>
        </div> 
        <div className="salaryDate">

          <div >salary :{props.item.salary}</div>
          <div >{`Joining Date: ${props.item.date}`}</div>

        </div>
        <Card.Text>
          {props.item.discription}
         
        </Card.Text>

        <Card.Link  onClick={()=> props.jobDetailHandler(props.item)}  style={{ width: '24rem', cursor:"pointer" }}>View Details</Card.Link>
       
      </Card.Body>
    </Card>

    </div>
  )
}

export default Vacancycard

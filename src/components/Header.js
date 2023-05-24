import React from 'react'
import {Container, Navbar,Button} from 'react-bootstrap';

function Header(props) {
  return (
    <div>
                  <Navbar>
      <Container>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button onClick={()=>props.handleShow()}>Add Job</Button>

            
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Header

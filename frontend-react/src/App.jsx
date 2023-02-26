import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Button  from 'react-bootstrap/Button';

function App() {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">NeetCode</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/practise">Practises</Nav.Link>
            <Nav.Link href="/raodmap">RoadMap</Nav.Link>
            <Nav.Link href="/pro">Pro</Nav.Link>
          </Nav>
          <div >
            <Button variant="outline-primary">
              dark
            </Button>
            <Button varient = "primary">
              Sign In
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default App

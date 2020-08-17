import React from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap';
import Logo from '../../Assets/Img/logo.png';
import { Link } from 'react-router-dom';
export const Home = () => (

    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <img  className="logo" src={Logo} alt="Logo"/>
    </Navbar.Brand>
    <Nav className="mr-auto text-center">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <div className="inline">
      <Link to="/Login">
        <Button variant="outline-light m-2">Login</Button>
      </Link>
     
     <Link to="/register">
         <Button variant="light shadow m-2">Get Started</Button>
     </Link>
    </div>
  </Navbar>
</div>
)
   
       


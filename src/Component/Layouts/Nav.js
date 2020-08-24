import React from 'react'
import {  Navbar,Dropdown, DropdownButton, Form, Badge, Nav, NavDropdown, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../Assets/Img/logo.png';
import User from '../../Assets/Img/user-icon.png';

const Styles = styled.div `


@media(min-width: 992px){
    .navbar-expand-lg .navbar-nav .dropdown-menu {
        max-width: 350px;
    }
}

`;


export const Navigation = () => (

   <Styles>
     

        <Navbar collapseOnSelect expand="lg" bg="lite">
            <Navbar.Brand href="/">
            <img  className="logo" src={Logo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="txt">
                <Nav className="m-auto text-center">
                <Nav.Link href="/dashboard">Home</Nav.Link>
                <Nav.Link href="#">Users</Nav.Link>
                <Nav.Link href="#">Clients</Nav.Link>
                <Nav.Link href="#">Business</Nav.Link>
                <Nav.Link href="#">Task</Nav.Link>
                <Nav.Link href="#">Reports</Nav.Link>
                <Nav.Link href="#">Configuration</Nav.Link>

                </Nav>
                <Nav>
                <Nav.Link>
                
                <DropdownButton
                alignRight
                title="Dropdown right"
                id="dropdown-menu-align-right"
                variant="lite"
                >
                    
                    
                <Dropdown.Item eventKey="1">
                <div className=" clearfix mb-2">
                        <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                        <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                        <small className="float-right text-muted"> 09:18am </small> <br></br>
                        <div className="activity-info">
                            <small className="text-muted mt-3"> Created a new client Shoprite Jabisdjfhsdjfjsdfhdsdssdfsdfdsf dsjhgfysdgyufhgsdvf dshjv fhvds</small>
                        </div>
                     </div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                <div className=" clearfix mb-2">
                        <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                        <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                        <small className="float-right text-muted"> 09:18am </small> <br></br>
                        <div className="activity-info">
                            <small className="text-muted mt-3"> Created a new client Shoprite Jabisdjfhsdjfjsdfhdsdssdfsdfdsf dsjhgfysdgyufhgsdvf dshjv fhvds</small>
                        </div>
                     </div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                <div className=" clearfix mb-2">
                        <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                        <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                        <small className="float-right text-muted"> 09:18am </small> <br></br>
                        <div className="activity-info">
                            <small className="text-muted mt-3"> Created a new client Shoprite Jabisdjfhsdjfjsdfhdsdssdfsdfdsf dsjhgfysdgyufhgsdvf dshjv fhvds</small>
                        </div>
                     </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">
                <div className=" clearfix mb-2">
                        <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                        <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                        <small className="float-right text-muted"> 09:18am </small> <br></br>
                        <div className="activity-info">
                            <small className="text-muted mt-3"> Created a new client Shoprite Jabisdjfhsdjfjsdfhdsdssdfsdfdsf dsjhgfysdgyufhgsdvf dshjv fhvds</small>
                        </div>
                     </div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="5">
                <div className=" clearfix mb-2">
                        <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                        <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                        <small className="float-right text-muted"> 09:18am </small> <br></br>
                        <div className="activity-info">
                            <small className="text-muted mt-3"> Created a new client Shoprite Jabisdjfhsdjfjsdfhdsdssdfsdfdsf dsjhgfysdgyufhgsdvf dshjv fhvds</small>
                        </div>
                     </div>
                </Dropdown.Item>
                </DropdownButton>
                
                </Nav.Link>
                <span><img  className="notify mt-3  mr-2" src={User} alt="users icon" /></span>
                <Nav.Link>
                   <DropdownButton id="dropdown-basic-button"  variant="lite" title="Chris,   Admin ">
                   
                   <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
                   
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                </DropdownButton>
                   
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
   </Styles>
)
export default Navigation
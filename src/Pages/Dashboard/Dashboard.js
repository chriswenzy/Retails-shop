import React from 'react'
import { Col, Row, Container, Button, Navbar, Nav, Form, img, Badge, Dropdown, DropdownButton, Jumbotron, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../Assets/Img/logo.png';
import User from '../../Assets/Img/user-icon.png';
import notify from '../../Assets/Img/notify-icon.png';
import Users from '../../Assets/Img/icons/users.png';
import Clients from '../../Assets/Img/icons/clients.png';
import Business from '../../Assets/Img/icons/business.png';
import Task from '../../Assets/Img/icons/task.png';
import Reports from '../../Assets/Img/icons/reports.png';
import Config from '../../Assets/Img/icons/config.png'



const Styles = styled.div `


`;

export const Dashboard = () => (

    <Styles>
    <div className="cover">
        <Navbar bg="lite" variant="light">
        <Navbar.Brand href="#home" className="mr-auto">
            <img  className="logo" src={Logo} alt="Logo"/>
            <i class="fa fa-bell" aria-hidden="true"></i>

        </Navbar.Brand>
            <Form inline className="mr-3">
                <img  className="notify" src={notify} alt="Notification bell" /> <Badge variant="danger rounded-circle" className="mb-4 mr-4">9</Badge>

                <img  className="notify mr-3" src={User} alt="users icon" />
                <DropdownButton id="dropdown-basic-button"  variant="lite" title="Chris,   Admin ">
                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                </DropdownButton>
            </Form>
        </Navbar>
        <Jumbotron fluid>
            <Container>
                <span className="text-white title-text" >Good morning Chris</span>
            </Container>
        </Jumbotron>

        <Container className="dash-content">
            <Row>
                <Col xs={12} md={8}>
                    <Row className="mb-3">
                        <Col xs={6} md={4}>
                        <Link to="">
                            <Card border="light">
                                <Card.Body className="text-center">
                                <img  className="dash-icon" src={Users} alt="users icon" />
                                <h6> <strong>Users</strong> </h6>
                                </Card.Body>
                        </Card>
                        </Link>
                        
                        </Col>
                        <Col xs={6} md={4}>
                        <Card border="light">
                            <Card.Body className="text-center">
                            <img  className="dash-icon" src={Clients} alt="users icon" />
                            <h6> <strong>Clients</strong> </h6>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={6} md={4}>
                        <Card border="light">
                            <Card.Body className="text-center">
                            <img  className="dash-icon" src={Business} alt="users icon" />
                            <h6> <strong>Business</strong> </h6>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xs={6} md={4}>
                        <Card border="light">
                            <Card.Body className="text-center">
                            <img  className="dash-icon" src={Task} alt="users icon" />
                            <h6> <strong>Tasks</strong> </h6>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={6} md={4}>
                        <Card border="light">
                            <Card.Body className="text-center">
                            <img  className="dash-icon" src={Reports} alt="users icon" />
                            <h6> <strong>Reports</strong> </h6>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={6} md={4}>
                        <Card border="light">
                            <Card.Body className="text-center">
                            <img  className="dash-icon" src={Config} alt="users icon" />
                            <h6> <strong>Configuration</strong> </h6>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    
                </Col>
                <Col xs={12} md={4}>
                    <Card border="light" className="activity-card">
                            <Card.Header>
                            <div className="clearfix">
                                <span className="float-left"> <strong>Recent Activities</strong> </span>
                                    
                                <Link to="#">
                                        <small className="float-right text-muted"> See all </small>
                                </Link> 
                             </div>
                            </Card.Header>
                            <Card.Body>

                                <div className=" clearfix mb-2" >
                                    <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                                    <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                                    <small className="float-right text-muted"> 09:18am </small> <br></br>
                                    <div className="activity-info">
                                    <small className="text-muted mt-3"> Created a new client Shoprite Jabi</small>
                                    </div>
                                </div>
                                <div className=" clearfix mb-2" >
                                    <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                                    <small className="mb-5" > <strong> Amina Doma </strong> </small> 
                                    <small className="float-right text-muted"> 09:18am </small> <br></br>
                                    <div className="activity-info">
                                    <small className="text-muted mt-3"> Change the price and due date of Shoprite account</small>
                                    </div>
                                </div>

                                
                                <center>
                                    <small className="text-muted">10 July 2020</small>
                                </center>

                                <div className=" clearfix mb-2" >
                                    <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                                    <small className="mb-5" > <strong> David Imoni</strong> </small> 
                                    <small className="float-right text-muted"> 09:18am </small> <br></br>
                                    <div className="activity-info">
                                    <small className="text-muted mt-3"> Change the price and due date of Shoprite account </small>
                                    </div>
                                </div>
                                <div className=" clearfix mb-2" >
                                    <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                                    <small className="mb-5" > <strong> Umar Ebelel </strong> </small> 
                                    <small className="float-right text-muted"> 09:18am </small> <br></br>
                                    <div className="activity-info">
                                    <small className="text-muted mt-3"> Created zdfff  czczbc xc zx cz xc zxgcgz a new client Shoprite Jabi ....</small>
                                    </div>
                                </div>

                                <center>
                                    <small className="text-muted">10 July 2020</small>
                                </center>

                                
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    </Styles>
)
   
       


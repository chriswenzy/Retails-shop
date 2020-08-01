import React  from 'react';
import { Form, Col, Row, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `



`;


export const Login = () => (

    <Styles>
        <div className="authContainer">
           
            <Container>
            <Row>
                <Col xs={12} md={5}></Col>
                <Col xs={6} md={6}>
                    <div className="formContainer-1">
                        <h3 className="title-text mb-5">Welcome to NRS</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                 <div className="mt-4 clearfix">
                                    <Link to="/register"> 
                                        <small className="float-left">Don’t have an account yet? <strong className="ml-2">Register</strong> </small>
                                    </Link>
                                    
                                    <Link to="/reset-password">
                                        <small className="float-right"> <strong>Forgot Password ?</strong> </small>
                                    </Link>
                                 </div>
                            </Form.Group>

                            <Form.Group>
                                <div className="mt-5">
                                    <Button variant="secondary btn-action" size="lg" block>
                                        LOGIN
                                    </Button>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
            </Container>

        </div>
    </Styles>
)
   
       


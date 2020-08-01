import React from 'react'
import { Form, Col, Row, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Styles = styled.div `



`;

export const Reset_password = () => (

    <Styles>
        <div className="authContainer">
           
            <Container>
            <Row>
                <Col xs={12} md={5}></Col>
                <Col xs={6} md={6}>
                    <div className="formContainer-1">
                        <h3 className="title-text mb-5">Welcome to NRS</h3>
                        <p> Please enter your email to reset your password</p>
                        <Form>
                            
                        <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        
                            <Form.Group>
                                <div className="mt-5">
                                    <Button variant="secondary btn-action" size="lg" block>
                                        SUBMIT
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
   
       


import React from 'react'
import { Form, Col, Row, Container, Button} from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div `



`;

export const First_login = () => (

    <Styles>
        <div className="authContainer">
           
            <Container>
            <Row>
                <Col xs={12} md={5}></Col>
                <Col xs={6} md={6}>
                    <div className="formContainer-1">
                        <h3 className="title-text mb-5">Welcome to NRS</h3>
                        <p>
                        We noticed this is your first time, 
                        please enter a new password to continue
                        </p>
                        <Form>
                            
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
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
   
       


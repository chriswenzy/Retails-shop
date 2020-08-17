import React from 'react'
import { Form, Col, Row, Container, Button} from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div `



`;

export const Welcome = () => (

    <Styles>
        <div className="authContainer">
           
            <Container>
            <Row>
                <Col xs={12} md={5}></Col>
                <Col xs={6} md={6}>
                    <div className="formContainer-1">
                        <h3 className="title-text mb-5">Congratulation!</h3>

                        <h4>You’re in, Chris</h4>

                        <p className="mt-5"> 
                            Registration was successful, please proceed to 
                            your dashboard by clicking on the button below.
                        </p>
                        <Form>
                            
                            <Form.Group>
                                <div className="mt-5">
                                    <Button variant="secondary btn-action" size="lg" block>
                                    PROCEED TO DASHBOARD
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
   
       


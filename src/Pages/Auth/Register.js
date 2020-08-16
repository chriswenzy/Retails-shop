import React from 'react'
import { Form, Col, Row, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Styles = styled.div `

input[type=checkbox] {
    position: absolute;
    opacity: 0;
}

#part1,
#part2{
  z-index: 2;
  display: block;
  height: auto;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

#part2 {
  opacity: 0;
  height: 0;
  overflow: hidden;
}

#step2:checked ~ #part2 {
    opacity: 1;
    height: auto;
  }
  #step2:checked ~ #part1 {
    opacity: 0;
    height: 0;
    display: none;
  }
`;

export const Register = () => {
    const [toggle,settoggle]= React.useState(false)

return(
    <Styles>
        <div className="authContainer">
           
            <Container>
                <Row>
                <Col xs={12} md={3}></Col>
                <Col xs={12} md={9}>
                    <div className="formContainer-2">
                    <span className="title-text ml-3">Let’s get started</span>
                    <div className="stepwizard col-md-offset-3">
                        <div className="stepwizard-row setup-panel">
                        <div className="stepwizard-step">
                        <a href="#step-1" type="button" className="btn btn-circle btn-default1"onClick={()=>{settoggle(false)}}>1</a>
                        <p>Personal Details</p>
                        </div>
                        
                        <div className="stepwizard-step">
                        <a href="#step-2" type="button" className="btn btn-default1 btn-circle" disabled="disabled" onClick={()=>{settoggle(true)}}>2</a>
                        <p>Business Details</p>
                        </div>
                        </div>
                    </div>
                    <input id='step2' type='checkbox'></input>
                    
                    <Form>
                    {!toggle ? (
                    <div className="" id="part1">
                    <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>First name <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text"  />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Middle name</Form.Label>
                            <Form.Control type="text" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Last name  <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text"  />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Phone number <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="number" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Email address  <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="email"  />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Gender <span className="text-danger">*</span></Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Username  <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text"  />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Address <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="textarea" rows="2" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                                <div className="">
                                    <Button variant="secondary btn-action" size="lg" block for='step2' id="continue-step2" onClick={()=>{settoggle(true)}}>
                                    CONTIUNE
                                    </Button>
                                </div>
                        </Form.Group>
                    </div>

                   ) : (
                    <div className="">
                    <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Company name <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text"  />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Company registration number</Form.Label>
                            <Form.Control type="text" />
                            </Form.Group>
                            
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Number of branches <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text"  />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Number products <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="number" />
                            </Form.Group>
                            
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Payment option <span className="text-danger">*</span> <small className="text-muted">( Trial or Pay Now ) </small></Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Trial</option>
                                <option>Pay now</option>
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Payment plan  <span className="text-danger">*</span> <small className="text-muted">( Monthly or Annually )</small></Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Monthly</option>
                                <option>Annually</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Amount to be paid <span className="text-danger">*</span> <small className="text-muted">( plus VAT 7.5% )</small></Form.Label>
                            <Form.Control type="number" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <div className="shadow p-2">
                                <h6>Subscription Plan:  Gold </h6>
                                <h6>Total:  50,000.00 </h6>
                            </div>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <div className="">
                                <Button variant="secondary btn-action" size="lg" block>
                                PAY NOW
                                </Button>
                                </div>
                        </Form.Group>
                    </div>
                   )}
                        
                    </Form>
                    </div>
                
                </Col>
                </Row>
            </Container>

        </div>
    </Styles>
)
}
   
       





    
   
       


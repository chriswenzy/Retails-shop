import React  from 'react';
import { Col, Row, Container, Button, Card, Jumbotron as Jumbo, img, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../../Component/Layouts/Nav';
import userImg from '../../../Assets/Img/userImg.png'
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const Styles = styled.div `

.jumbotron-fluid{
    height: 130px;
}

`;

export const EditProfile = () => (

    <Styles>
        <Nav/>
        <Jumbo fluid>
        </Jumbo>
        
        <Container>
            <Card>
                     <Row className="p-5">
                        
                        <Col  md={3}>
                        <img  className="" src={userImg} alt="users" height="150px" width="150px" />
                         </Col>

                         <Col md={9}>
                         <Formik
                        initialValues={{ firstName: '', email: ''}}
                        validationSchema={Yup.object({
                        firstName: Yup.string()
                            .required('Required'),

                        middleName: Yup.string()
                            .required('Required'),

                        lastName: Yup.string()
                            .required('Required'),
                        
                        phoneNumber: Yup.string()
                            .required('Required'),

                        role: Yup.string()
                            .required('Required'),

                        gender: Yup.string()
                            .required('Required'),

                          email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        
                        address: Yup.string()
                            .required('Required'),
                        
                        })}
                        onSubmit={async (values, { setSubmitting }) => {
                            setSubmitting(false);
                            await EditProfile(values)
                        }}
                        >
                        {({setSubmitting,handleSubmit,handleChange,values}) => (
                        <Form noValidate onSubmit={handleSubmit}>
                             <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>First name <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" name="firstName" value={values.firstName} onChange={handleChange} />
                            <ErrorMessage name="firstName"/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Middle name</Form.Label>
                            <Form.Control type="text" name="middleName" value={values.middleName} onChange={handleChange}/>
                            <ErrorMessage name="middleName" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Last name  <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} />
                            <ErrorMessage name="lastName" />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Phone number <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="number" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
                            <ErrorMessage name="phoneNumber" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Role  <span className="text-danger">*</span></Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." name="role" value={values.role} onChange={handleChange} >
                                <option>Choose...</option>
                                <option>Admin</option>
                                <option>Shop keeper</option>
                            </Form.Control>
                            <ErrorMessage name="role" />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Gender <span className="text-danger">*</span></Form.Label>
                            <Form.Control as="select" defaultValue="Choose..."  name="gender" value={values.gender} onChange={handleChange}>
                                <option>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                            <ErrorMessage name="gender" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Email  <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="email" name="email" value={values.email} onChange={handleChange} readOnly />
                            </Form.Group>
                            <ErrorMessage name="email" />
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Address <span className="text-danger">*</span></Form.Label>
                            <Form.Control as="textarea" rows="3" name="address" value={values.address} onChange={handleChange} />
                            </Form.Group>
                            <ErrorMessage name="address" />
                        </Form.Row>

                    
                            <Form.Group>
                                <div className="mt-3 text-center">
                                        
                                        
                                        <Button className="btn-cancel m-3 shadow" disabled={!setSubmitting}>
                                            Cancel
                                        </Button>
                                        <Button className="btn-save m-3 shadow" disabled={!setSubmitting}>
                                            Edit Profile {!setSubmitting ? (<span id="login_spinner" className="fa fa-spin fa-spinner"></span>) :null}
                                        </Button>
                                       
                                        
                                </div>
                            </Form.Group>
                        </Form>
                        )}
                        </Formik>
                         </Col>
                    </Row>   
                
            </Card>
            
        </Container>
        
    </Styles>
)
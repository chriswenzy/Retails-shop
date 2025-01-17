import React  from 'react';
import { Form, Col, Row, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Formik,ErrorMessage} from 'formik'
import * as Yup from 'yup';
import { AuthContext } from '../../Context/AuthContext';

const Styles = styled.div `



`;


export const Login = () => {
    const {login} = React.useContext(AuthContext)

return(
    <Styles>
        <div className="authContainer">
           
            <Container>
            <Row>
                <Col xs={12} md={5}></Col>
                <Col xs={6} md={6}>
                    <div className="formContainer-1">
                        <h3 className="title-text mb-5">Welcome to NRS</h3>
                        <Formik
                        initialValues={{ email: '', password: ''}}
                        validationSchema={Yup.object({
                          email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .max(12, 'Must be 12 characters or less')
                            .required('Required'),
                        })}
                        onSubmit={async (values, { setSubmitting }) => {
                            setSubmitting(false);
                            await login(values)
                        }}
                        >
                        {({setSubmitting,handleSubmit,handleChange,values}) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={values.email} onChange={handleChange}/>
                                <ErrorMessage name="email"  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"  name='password' value={values.password} onChange={handleChange}/>
                                <ErrorMessage name="password"/>
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
                                        <Button type='submit'  variant="secondary btn-action" size="lg" disabled={!setSubmitting} block>
                                            LOGIN  {!setSubmitting ? (<span id="login_spinner" className="fa fa-spin fa-spinner text-danger"></span>) :null}
                                        </Button>
                                </div>
                            </Form.Group>
                        </Form>
                        )}
                        </Formik>
                    </div>
                </Col>
            </Row>
            </Container>

        </div>
    </Styles>

)}
   
       


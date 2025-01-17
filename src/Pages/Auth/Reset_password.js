import React from 'react'
import { Form, Col, Row, Container, Button} from 'react-bootstrap';
import styled from 'styled-components';
import {Formik,ErrorMessage} from 'formik'
import * as Yup from 'yup';
import {AuthService} from '../../Services/authService'
import {useAlert} from 'react-alert'
import {useHistory} from 'react-router-dom'


const Styles = styled.div `



`;

export const Reset_password = () => {
    const alert = useAlert()
    const history = useHistory()
return(
    <Styles>
        <div className="authContainer">
           
            <Container>
            <Row>
                <Col xs={12} md={5}></Col>
                <Col xs={6} md={6}>
                    <div className="formContainer-1">
                        <h3 className="title-text mb-5">Welcome to NRS</h3>
                        <p> Please enter your email to reset your password</p>
                        <Formik
                        initialValues={{ email: ''}}
                        validationSchema={Yup.object({
                          email: Yup.string()
                            .email('Invalid email address')
                            .required('Required')
                        })}
                        onSubmit={async (values, { setSubmitting }) => {
                            setSubmitting(false);
                          const response =  await AuthService.sendResetEmail(values.email)
                           if (response.success) {
                            history.push('/login')
                            alert.success('Email sent successfully')
                            return
                          }
                
                          alert.error(response.message)
                        }}
                        >
                        {({setSubmitting,handleSubmit,handleChange,values}) => (
                        <Form onSubmit={handleSubmit}>
                            
                        <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={values.email} onChange={handleChange} />
                                <ErrorMessage name="email" />
                        </Form.Group>
                        
                            <Form.Group>
                                <div className="mt-5">
                                    <Button type='submit' variant="secondary btn-action" size="lg" disabled={!setSubmitting} block>
                                        SUBMIT {!setSubmitting ? (<span  className="fa fa-spin fa-spinner"></span>) :null}
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
)
}
   
       


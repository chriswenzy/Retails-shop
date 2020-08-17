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

export const Forget_password = ({params,query}) => {
    const alert = useAlert()
    const history = useHistory()
    const token = params.token
    const email = query.email


return(
    <Styles>
        <div className="authContainer">
           
            <Container>
            <Row>
                <Col xs={12} md={5}></Col>
                <Col xs={6} md={6}>
                    <div className="formContainer-1">
                        <h3 className="title-text mb-5">Welcome to NRS</h3>
                        <p> Please enter your new Password </p>
                        <Formik
                        initialValues={{ password: '',confirm_password:''}}
                        validationSchema={Yup.object({
                          password: Yup.string()
                          .max(8, 'Must be 8 characters or less')
                          .required('Required'),
                          confirm_password: Yup.string()
                          .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        })}
                        onSubmit={async ({ setSubmitting,password,confirm_password }) => {
                            setSubmitting(false);
                          const response =  await AuthService.forgetPassword(password,confirm_password,token,email)
                           if (response.success) {
                            history.push('/login')
                            alert.success('Password reset successfully')
                            return
                          }
                
                          alert.error(response.message)
                        }}
                        >
                        {({setSubmitting,handleSubmit,handleChange,values}) => (
                        <Form onSubmit={handleSubmit}>
                            
                        <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" name='password' value={values.password} onChange={handleChange} />
                                <ErrorMessage name="password" />
                        </Form.Group>

                        <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter confirm password" name='confirm_password' value={values.confirm_password} onChange={handleChange} />
                                <ErrorMessage name="confirm_password" />
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
   
       


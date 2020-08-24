import React  from 'react';
import { Col, Row, Container, Button, Card, Jumbotron as Jumbo, img, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../../Component/Layouts/Nav';
import userImg from '../../../Assets/Img/userImg.png'


const Styles = styled.div `

.jumbotron-fluid{
    height: 130px;
}

tr td,th{
    padding: 15px;
}
`;

export const Profile = () => (
    <Styles>
        <Nav/>
        <Jumbo fluid>
        </Jumbo>
        
        <Container>
            <Card>
                     <Row className="p-5">
                        
                        <Col  md={4}>
                        <img  className="" src={userImg} alt="users image" height="200px" width="200px" />
                         </Col>
                         <Col md={8}>
                         <Table borderless hover responsive="sm" size="sm">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <th>Chris Chukwuebuka</th>
                                </tr>
                                <tr>
                                    <td>Role</td>
                                    <th className="text-danger">Administrator</th>
                                </tr>
                                <tr>
                                    <td>Phone number</td>
                                    <th>07067435384</th>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <th>Chris@needletechnology.com.ng</th>
                                </tr>
                            </tbody>
                            </Table>
                         </Col>
                    </Row>   
                <center>
                <Button className="btn-create mb-5 mt-2 shadow-lg">Edit Profile</Button>
                </center>
            </Card>
            
        </Container>
        
    </Styles>
)
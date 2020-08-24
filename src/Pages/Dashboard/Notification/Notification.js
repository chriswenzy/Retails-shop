import React  from 'react';
import { Col, Row, Container, Button, Card, Jumbotron as Jumbo, img,  Form, FormControl, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../../Component/Layouts/Nav';
import User from '../../../Assets/Img/user-icon.png';


const Styles = styled.div `

.jumbotron-fluid{
    height: 130px;
}

`

export const Notifications = () => (

    <Styles>
        <Nav/>
        <Jumbo fluid></Jumbo>
        <Container>
        <Form inline>
        <Col md={4}>
            <div className="input-group">
                <input className="form-control py-2 border-right-0 border" type="search" placeholder="search"  />
                <span className="input-group-append">
                    <div className="input-group-text bg-transparent"><i class="fa fa-search"></i></div>
                </span>
            </div>       
        </Col>
        <Col md={4}>
        
            <Button className="btn-filter-all shadow m-1">All</Button>
            <Button className="btn-filter">Seen</Button>
            <Button className="btn-filter">Recent</Button>
        
        </Col>
        <Col md={4}>
            <div className="breadcrum">
                <ul >
                    <li>Home</li>
                    <li>Notification</li>

                </ul>
            </div>
        </Col>    
        </Form>
        </Container>

        <Container className="mt-4">
            <Card className="p-2">
                <Col md={12}>
                    <div className=" clearfix mb-2">
                        <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                        <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                        <small className="float-right text-muted"> 09:18am </small> <br></br>
                        <Button variant="lite" size="sm" className="btn text-danger shadow float-right">Detele </Button>
                        <div className="activity-info">
                            <small className="text-muted mt-3"> Created a new client Shoprite Jabi</small>
                        </div>
                     </div>
                </Col>
            </Card>

            <Card className="p-2">
                <Col md={12}>
                    <div className=" clearfix mb-2">
                        <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                        <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                        <small className="float-right text-muted"> 09:18am </small> <br></br>
                        <Button variant="lite" size="sm" className="btn text-danger shadow float-right">Detele </Button>
                        <div className="activity-info">
                            <small className="text-muted mt-3"> Created a new client Shoprite Jabi</small>
                        </div>
                     </div>
                </Col>
            </Card>

            <p className="text-center m-3">Yesterday</p>

            <Card className="p-2">
                <Col md={12}>
                    <div className=" clearfix mb-2">
                        <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                        <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                        <small className="float-right text-muted"> 09:18am </small> <br></br>
                        <Button variant="lite" size="sm" className="btn text-danger shadow float-right">Detele </Button>
                        <div className="activity-info">
                            <small className="text-muted mt-3"> Created a new client Shoprite Jabi</small>
                        </div>
                     </div>
                </Col>
            </Card>

            <Card className="p-2">
                <Col md={12}>
                    <div className=" clearfix mb-2">
                        <img  className="activity-icon float-left mr-2" src={User} alt="users icon" />
                        <small className="mb-5" > <strong> Chris Chukwuebuka </strong> </small> 
                        <small className="float-right text-muted"> 09:18am </small> <br></br>
                        <Button variant="lite" size="sm" className="btn text-danger shadow float-right">Detele </Button>
                        <div className="activity-info">
                            <small className="text-muted mt-3"> Created a new client Shoprite Jabi</small>
                        </div>
                     </div>
                </Col>
            </Card>

            <p className="text-center m-3">25th June 2020</p>

        </Container>
    
    </Styles>

)
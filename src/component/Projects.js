


import React from 'react';
import {    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row, Button} from 'reactstrap';
const Projects = () => {
  return (
      <div>
          <hr></hr>
          <h2>Projects</h2>
          <hr></hr>
      <div className="container">
          <div className="row my-4  mx-md-5">
        <Card className="projectCard col-10 mainCard">
            <Row className=" align-items-center"> 
                <Col  md={4} className="my-3" >
                <a  href="http://haoliweb.com/time-event-log/" target="_blank">
                    <CardImg className="projectImg"   width="100%" src={process.env.PUBLIC_URL +'/' +"/homeTimeEvent.png" }/>
                </a>
                </Col> 
                <Col  md={8} >
                    <CardBody    >
                        <CardTitle tag="h5">Time-Event Log</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><i className="  fa fa-flag  fa-1x"> </i> &nbsp; React, redux, thunk, User authentication, Restful API, MongoDB</CardSubtitle>
                        <CardText className="li-text-left CardTextClass">
                        <ul>
                            <li> <b>Description:</b> <br/></li>
                            This application is a time management tool used to improve working efficiency. A registered user can use this application to record his or her daily time and events.
                            <li> <b>Deployment:</b> <br/></li>
                            Backend deployed to <b>AWS Elastic Beanstalk</b> 
                            <li> <b>Attractive features:</b> <br/></li>
                            JWT User Authentication; Data visualization and timeline; Save data to MongoDB database; Form validation.
                        </ul>
                        </CardText>
                        <Row className="justify-content-center"> 
                            <Col  md={3}>
                                <a href="http://haoliweb.com/time-event-log/" target="_blank">
                                <Button className="projectButton"> Live</Button> 
                                </a>
                            </Col>
                            <Col  md={3}>
                                <a href="https://github.com/lihaokx/time-event-log" target="_blank">
                                <Button className="projectButton"> Github</Button>
                                </a>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row >
        </Card>
    </div>

    <div className="row my-4 mx-md-5">
        <Card className="projectCard  col-md-10 mainCard">
            <Row className=" align-items-center"> 
                <Col  md={4}  className=" my-3">
                    <a  href="https://www.dukelearntoprogram.com//capstone/recommender.php?id=WFx9MjTmtzvgdy" target="_blank">
                    <CardImg className="projectImg"   width="100%" src={process.env.PUBLIC_URL +'/' +"./movieRecommend.jpg"} />
                    </a>
                </Col> 
                <Col  md={8}>
                    <CardBody    >
                        <CardTitle tag="h5">Backend: Movie recommendation </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><i className="  fa fa-flag  fa-1x"> </i> &nbsp;  Java, Weighted averages </CardSubtitle>
                        <CardText className="li-text-left CardTextClass">
                        <ul>
                            <li> <b>Description:</b> <br/></li>
                            A capstone project of Java Programming and Software Engineering Fundamentals Specialization. It is a tool that recommends movies to users according to their movie ratings.
                            <li> <b>Attractive features:</b> <br/></li>
                            <b>Java</b>, Interface, User similarities
                        </ul>
                        </CardText>
                        <Row className="justify-content-center"> 
                            <Col  md={3}>
                                <a href="https://www.dukelearntoprogram.com//capstone/recommender.php?id=WFx9MjTmtzvgdy" target="_blank">
                                <Button className="projectButton"> Live</Button> 
                                </a>
                            </Col>
                            <Col  md={3}>
                                {/* //???????????????? */}
                                <a href="  " target="_blank"> 
                                <Button className="projectButton"> Github</Button>
                                </a>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row >
        </Card>
    </div>

    <div className="row my-4 mx-md-5">
        <Card className="projectCard col-md-10 mainCard">
            <Row className="  align-items-center"> 
                <Col  md={4} className=" my-3">
                    <a  href="https://lihaokx.github.io/react_website/" target="_blank">
                        <CardImg className="projectImg"   width="100%" src={process.env.PUBLIC_URL +'/' +"./myRestaurantHome.png" }/>
                    </a>
                </Col> 
                <Col  md={8}>
                    <CardBody    >
                        <CardTitle tag="h5">Restaurant Website</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><i className="  fa fa-flag  fa-1x"> </i> &nbsp; React, Google map API, redux, thunk, reactstrap, server communication   </CardSubtitle>
                        <CardText className="li-text-left CardTextClass">
                        <ul>
                            <li> <b>Description:</b> <br/></li>
                            This is a one-page restaurant website. It allows users to rate and comment about dishes.
                            <li> <b>Attractive features:</b> <br/></li>
                            Google Map, Breadcrumb, Form validation, User rate and comment, User registration and login.
                        </ul>
                        </CardText>
                        <Row className="justify-content-center"> 
                            <Col  md={3}>
                                <a href="https://lihaokx.github.io/react_website/" target="_blank">
                                <Button className="projectButton"> Live</Button> 
                                </a>
                            </Col>
                            <Col  md={3}>
                                {/* //???????????????? */}
                                <a href="  " target="_blank"> 
                                <Button className="projectButton"> Github</Button>
                                </a>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row >
        </Card>
    </div>

    <div className="row my-4 mx-md-5">
        <Card className="projectCard col-md-10 mainCard">
            <Row className="  align-items-center"> 
                <Col  md={4} className=" my-3">
                    <a  href="https://lihaokx.github.io/lihaokx-frontend-developer-intern-winter-2022/" target="_blank">
                        <CardImg className="projectImg"   width="100%" src={process.env.PUBLIC_URL +'/' +"./spacetagramHomepage.png" }/>
                    </a>
                </Col> 
                <Col  md={8}>
                    <CardBody    >
                        <CardTitle tag="h5">Spacetagram</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><i className="  fa fa-flag  fa-1x"> </i> &nbsp; React, redux, reactstrap, React-social</CardSubtitle>
                        <CardText className="li-text-left CardTextClass">
                        <ul>
                            <li> <b>Description:</b> <br/></li>
                        This project is Instagram-like website used to share photos from one of NASA image APIs. It can pull images, and allow users to like and unlike their favourite images.  <br/>                      
                            <li> <b>Attractive features:</b> <br/></li>
                        Share images to social meadia; Fetch data from a third-party API; Search for title; Loading spinner while fetching data.
                        </ul>
                        </CardText>
                        <Row className="justify-content-center"> 
                            <Col  md={3}>
                                <a href="https://lihaokx.github.io/lihaokx-frontend-developer-intern-winter-2022/" target="_blank">
                                <Button className="projectButton"> Live</Button> 
                                </a>
                            </Col>
                            <Col  md={3}>
                                {/* //???????????????? */}
                                <a href="https://github.com/lihaokx/lihaokx-frontend-developer-intern-winter-2022" target="_blank"> 
                                <Button className="projectButton"> Github</Button>
                                </a>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row >
        </Card>
    </div>

    
    <div className="row my-4 mx-md-5">
        <Card className="projectCard col-md-10 mainCard">
            <Row className="  align-items-center"> 
                <Col  md={4} className=" my-3">
                    <a  href="http://haoliweb.com/crypto/index.php" target="_blank">
                        <CardImg className="projectImg"   width="100%" src={process.env.PUBLIC_URL +'/' +"./cryptoHomepage1.png" }/>
                    </a>
                </Col> 
                <Col  md={8}>
                    <CardBody    >
                        <CardTitle tag="h5">Cryptocurrency Shop</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><i className="  fa fa-flag  fa-1x"> </i> &nbsp; HTML/CSS, PHP, SQL, Database: MySQL</CardSubtitle>
                        <CardText className="li-text-left CardTextClass">
                        <ul>
                            <li> <b>Description:</b> <br/></li>
                            This is a website to add an order of cryptocurrency.
                            <li> <b>Attractive features:</b> <br/></li>
                            Full-stack, Deployed on Hostgator with my own domain.
                         </ul>
                        </CardText>
                        <Row className="justify-content-center"> 
                            <Col  md={3}>
                                <a href="http://haoliweb.com/crypto/index.php" target="_blank">
                                <Button className="projectButton"> Live</Button> 
                                </a>
                            </Col>
                            <Col  md={3}>
                                {/* //???????????????? */}
                                <a href="https://github.com/lihaokx/crypto_shop" target="_blank"> 
                                <Button className="projectButton"> Github</Button>
                                </a>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row >
        </Card>
    </div>

    <div className="row my-4 mx-md-5">
        <Card className="projectCard col-md-10 mainCard">
            <Row className="  align-items-center"> 
                <Col  md={4} className=" my-3">
                    <a  href="https://shopify-backend-intern-2022.herokuapp.com/" target="_blank">
                        <CardImg className="projectImg"   width="100%" src={process.env.PUBLIC_URL +'/' +"./restApiHome.png" }/>
                    </a>
                </Col> 
                <Col  md={8}>
                    <CardBody    >
                        <CardTitle tag="h5">A Rest API</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><i className="  fa fa-flag  fa-1x"> </i> &nbsp; Node.js, Express, MongoDB database, JSON Web Token</CardSubtitle>
                        <CardText className="li-text-left CardTextClass">
                        <ul>
                            <li> <b>Description:</b> <br/></li>
                            A Rest API used for uploading and deleting images.
                            <li> <b>Attractive features:</b> <br/></li>
                            User authentication; Only registered users can upload and delete; Add images one / bulk images; Respond useful information after deletion and uploading.
                         </ul>
                        </CardText>
                        <Row className="justify-content-center"> 
                            <Col  md={3}>
                                <a href="https://shopify-backend-intern-2022.herokuapp.com/" target="_blank">
                                <Button className="projectButton"> Live</Button> 
                                </a>
                            </Col>
                            <Col  md={3}>
                                {/* //???????????????? */}
                                <a href="https://github.com/lihaokx/shopify-backend-intern-2022" target="_blank"> 
                                <Button className="projectButton"> Github</Button>
                                </a>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row >
        </Card>
    </div>


    </div>
    </div>
  );
}

export default Projects;
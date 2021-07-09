


import React from 'react';
import {    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row, Button} from 'reactstrap';
const Projects = () => {
  return (
      <div className="container">
          <div className="row my-4">
        <Card className="projectCard col col-md-10 mx-auto">
            <Row className="justify-content-center align-items-center"> 
                <Col  md={3}>
                    <CardImg left width="100%" src="./homepageContent.png" />
                </Col> 
                <Col  md={6}>
                    <CardBody    >
                        <CardTitle tag="h5">Time-Event Log</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><i className="  fa fa-flag  fa-1x"> </i> &nbsp; React, redux, redux-form, thunk, reactstrap</CardSubtitle>
                        <CardText className="li-text-left">
                            A tool used to improve working efficiency. We can use it to record time and events of our daily life.
                            These things include start moment, stop moment, event, time consumed and importance of the events.
                            By using this app, we can exactly know what our 24 hours are spent on. 

                        </CardText>
                        <Row className="justify-content-center"> 
                            <Col  md={3}>
                                <a href="https://lihaokx.github.io/time-event-log/" target="_blank">
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

    <div className="row my-4">
        <Card className="projectCard col col-md-10 mx-auto">
            <Row className="justify-content-center align-items-center"> 
                <Col  md={3}>
                    <CardImg left width="100%" src="./movieRecommend.jpg" />
                </Col> 
                <Col  md={6}>
                    <CardBody    >
                        <CardTitle tag="h5">Backend: Movie recommendation </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><i className="  fa fa-flag  fa-1x"> </i> &nbsp;  Java, Weighted averages </CardSubtitle>
                        <CardText className="li-text-left">
                            A tool to recommend movies to users according to their movie ratings.
                            First, users rate some movies according to their interests. Then, the backend will calculate
                            the similarities between new users and existing users' reviews. 
                            Finally, the system will recommend some movies with high scores of weighted averages.

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

    <div className="row my-4">
        <Card className="projectCard col col-md-10 mx-auto">
            <Row className="justify-content-center align-items-center"> 
                <Col  md={3}>
                    <CardImg left width="100%" src="./restaurantWeb.png" />
                </Col> 
                <Col  md={6}>
                    <CardBody    >
                        <CardTitle tag="h5">Restaurant Website</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><i className="  fa fa-flag  fa-1x"> </i> &nbsp; React, redux, thunk, reactstrap, server communication  </CardSubtitle>
                        <CardText className="li-text-left">
                            A one-page restaurant website. <br></br>
                            Implement Redux to monitor global states. <br></br>
                            Controlled Form validation. <br></br>
                            React-router to switch pages.

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

    </div>
  );
}

export default Projects;
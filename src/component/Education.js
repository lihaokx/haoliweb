import React from 'react';
import {    Card,  CardText, 
    CardTitle, CardImg, Col, Row,  List} from 'reactstrap';const Education = () => {
  return (
    
    <div >
        <div className="container educationContainer  ">
            <hr></hr>
                <h2>Professional experience</h2>
            <hr></hr>

            <div className="row my-4 mx-md-5">
            <Card className="projectCard  col-10 mainCard">
                <Row className=" align-items-center"> 
                    <Col md={4} className="my-3" >
                        <Card body  className="justify-content-center" >
                            <Row className=" align-items-center"> 
                                <Col  xs={3}  className="my-3 px-0" >
                                    <CardImg 
                                        src={process.env.PUBLIC_URL +'/' +"./shopify_glyph.png" }
                                        top
                                        width="100%"
                                    />
                                </Col>
                                <Col  xs={9} className="my-3 px-0" >
                                <CardTitle className= "CardTitleClass"><strong>Backend Intern</strong></CardTitle>
                                <CardText  ><strong>Shopify</strong><br></br>
                                    Jan 2022 - Apr 2022</CardText>
                                </Col>
                            </Row >
                        </Card>
                    </Col> 

                    <Col  md={8}  className=" my-3">
                        <div>
                        <List className="li-text-left mb-0" >
                            <li className="li-text-left">Implemented and optimized identity authentication flow for a novel login portal by Ruby on Rails. It reduced the risk of
information leak.</li>
                            <li className="li-text-left">Built a domain-checking and type-checking email address validator, which caught 100% of email addresses with an
invalid domain.</li>
                            <li className="li-text-left">Sync data between different portal, which could be used to improve user experience.</li>
                        </List>   
                    </div>
                    </Col>
                </Row >
            </Card>
          </div>

          <div className="row my-4 mx-md-5">
            <Card className="projectCard  col-10 mainCard">
                <Row className=" align-items-center"> 
                    <Col  md={4} className="my-3" >
                        <Card  body className="justify-content-center" >
                            <Row className=" align-items-center"> 
                                <Col  xs={3}  className="my-3 px-0" >
                                    <CardImg 
                                        src={process.env.PUBLIC_URL +'/' +"./tutorocean.png" }
                                        top
                                        width="100%"
                                    />
                                </Col>
                                <Col  xs={9} className="my-3 px-0" >
                                    <CardTitle  className= "CardTitleClass"><strong>Full-stack Developer</strong></CardTitle>
                                    <CardText ><strong>TutorOcean</strong><br></br>
                                    Oct 2021 - Dec 2021</CardText>
                                </Col>
                            </Row>
                        </Card>
                    </Col> 

                    <Col  md={8}  className=" my-3">
                        <div>
                        <List className="li-text-left mb-0" >
                            <li className="li-text-left">Communicated with customer success team to design new features and UI improvement, which received more than
95% positive feedback from customers.</li>
                            <li className="li-text-left">Developed applications for sales teams to interact with databases, for example, referring students and promoting
tutors. It reduced their repetitive work dramatically.</li>
                            <li className="li-text-left">Optimized Hubspot CRM APIs on the backend, which reduced more than 50% of unnecessary CRUD operation.</li>
                        </List>   
                    </div>
                    </Col>
                </Row >
            </Card>
          </div>

            <div className="row my-4 mx-md-5">
            <Card className="projectCard  col-10 mainCard">
                <Row className=" align-items-center"> 
                    <Col  md={4} className="my-3" >
                        <Card  body className="justify-content-center" >
                            <Row className=" align-items-center"> 
                                <Col  xs={3}  className="my-3 px-0" >
                                    <CardImg 
                                        src={process.env.PUBLIC_URL +'/' +"./coursera.png" }
                                        top
                                        width="100%"
                                    />
                                </Col>
                                <Col  xs={9} className="my-3 px-0" >
                                    <CardTitle className= "CardTitleClass"><strong>Self-taught Coder</strong></CardTitle>
                                    <CardText ><strong>Coursera</strong><br></br>
                                        Apr 2020 - Present</CardText>
                                </Col>
                            </Row>
                        </Card>
                    </Col> 

                    <Col  md={8}  className=" my-3">
                        <div>
                        <List className="li-text-left mb-0" >
                            <li className="li-text-left"><b>Front-end</b>: React, Javascript, Bootstrap, Redux</li>
                            <li className="li-text-left"><b>Back-end</b>: Java, Restful API, Ruby on Rails, GraphQL, PHP, Node.js, Python, SQL</li>
                            <li className="li-text-left"><b>Database</b>: MongoDB, MySQL</li>
                            <li className="li-text-left"><b>Languages</b>: Java, Python, C++, Ruby</li>
                            <li className="li-text-left"><b>Data Science</b>: Scikit-learn, Gensim, NLTK, Pandas </li>
                            <li className="li-text-left"><b>Visualization</b>: Matplotlib, Seaborn </li>
                            <li className="li-text-left"><b>Tools</b>: Git, Linux, Visual Studio, AWS EC2, Google cloud</li>
                            <li className="li-text-left"><b> Earned 20 Certificates</b> From Coursera </li>
                            <li className="li-text-left"><b>IELTS</b>: Overall Band <b>8.0</b></li>
                        </List>   
                    </div>
                    </Col>
                </Row >
            </Card>
          </div>

          <div className="row my-4  mx-md-5">
            <Card className="projectCard   col-10 mainCard">
                <Row className=" align-items-center"> 
                    <Col    md={4} className=" my-3">
                        <Card body className="justify-content-center">
                            <Row className=" align-items-center"> 
                                <Col  xs={3}  className="my-3 px-0" >
                                    <CardImg 
                                        src={process.env.PUBLIC_URL +'/' +"./UOttawa.png" }
                                        top
                                        width="100%"
                                    />
                                </Col>
                                <Col  xs={9} className="my-3 px-0" >
                                    <CardTitle  className= "CardTitleClass"><strong>Master of Engineering</strong></CardTitle>
                                    <CardText ><strong>University of Ottawa</strong><br></br>
                                        Sep 2019 - Mar 2021</CardText>
                                </Col>
                            </Row>
                        </Card>
                    </Col> 

                    <Col  md={8} className=" my-3 mb-0">
                        <div>
                        <List className="li-text-left">
                        <li className="li-text-left">Research assistant.</li>
                        <li className="li-text-left">Scholarship: <b>Special scholarship.</b> </li>
                        <li className="li-text-left">Propose and implement a Spectral Forcing Method to improve combustion simulation performance. Obtain its results by performing parallel programming on a HPC system with more than <b>1000 CPUs</b>. Simulation stabilization time is 80% longer than previous simulation.</li>
                        <li className="li-text-left">More than 1 year of experience in <b>Parallel Computing</b>.</li>
                        <li className="li-text-left">Work collaboratively with several project teams.</li>
                        </List>   
                    </div>
                    </Col>
                </Row >
            </Card>
          </div>


          <div className="row my-4 mx-md-5" >
            <Card className="projectCard   col-10 mainCard">
                <Row className=" align-items-center"> 
                    <Col   md={4} className=" my-3">
                        <Card body className="justify-content-center">
                            <Row className=" align-items-center"> 
                                <Col  xs={3}  className="my-3 px-0" >
                                    <CardImg 
                                        src={process.env.PUBLIC_URL +'/' +"./xdf.jpeg" }
                                        top
                                        width="100%"
                                    />
                                </Col>
                                <Col  xs={9} className="my-3 px-0" >
                                    <CardTitle  className= "CardTitleClass"><strong>Physics Teacher</strong></CardTitle>
                                    <CardText><strong>New Oriental Education</strong><br></br>
                                        Sep 2015 - Aug 2019</CardText>
                                </Col>
                            </Row>
                        </Card>
                    </Col> 

                    <Col  md={8} className=" my-3 mb-0">
                        <div>
                        <List className="li-text-left">
                        <li className="li-text-left">Introduce basic <b>python programming skills</b> to students.</li>
                        <li className="li-text-left">4 years of <b>Physics teaching</b> experience; teach more than 200 students and <b>no customer complaint</b>.</li>
                        <li className="li-text-left">Train new teachers and psychological counseling for students.</li>
                        <li className="li-text-left">Awarded with Excellent Book Reader Prize.</li>
                        <li className="li-text-left">More than <b>80% returned customers</b>.</li>
                        <li className="li-text-left">Make promotions presentations for customers<b>(more than 30 people)</b>.</li>
                        </List>   
                    </div>
                    </Col>
                </Row >
            </Card>
          </div>
        </div>
<br></br>
      
        </div >
  );
}

export default Education;
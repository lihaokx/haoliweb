import React from 'react';
import {    Card,  CardText, 
    CardTitle,  Col, Row,  List} from 'reactstrap';const Education = () => {
  return (
    
    <div >
        <div className="container educationContainer  ">
            <hr></hr>
                <h2>Professional experience</h2>
            <hr></hr>


            <div className="row my-4 mx-md-5">
            <Card className="projectCard  col-10 mainCard">
                <Row className=" align-items-center"> 
                    <Col  md={4} className="my-3" >
                        <Card  body className="justify-content-center" >
                            <CardTitle tag="h4" className= "CardTitleClass">Self-taught Coder</CardTitle>
                            <CardText className="CardTextClass">Coursera<br></br>
                                April 2020 - Present 2021</CardText>
                        </Card>
                    </Col> 

                    <Col  md={8}  className=" my-3">
                        <div>
                        <List className="li-text-left mb-0" >
                            <li className="li-text-left"><b>Front-end</b>: React, Javascript, HTML/CSS, Bootstrap, Redux, JQuery, Apollo client</li>
                            <li className="li-text-left"><b>Back-end</b>: Java, Restful API, GraphQL, PHP, Express framework, Python, SQL</li>
                            <li className="li-text-left"><b>Database</b>：MongoDB, MySQL</li>
                            <li className="li-text-left"><b>Data Science</b>: Scikit-learn, Gensim, NLTK, Pandas </li>
                            <li className="li-text-left"><b>Visualization</b>: Matplotlib, Seaborn </li>
                            <li className="li-text-left"><b>Tools</b>: Git, Linux, Visual Studio, WordPress, AWS EC2</li>
                            <li className="li-text-left">Data structure and algorithms</li>
                            <li className="li-text-left"><b>18 Certificates</b> From Coursera </li>
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
                            <CardTitle tag="h4" className= "CardTitleClass">Master of Engineering</CardTitle>
                            <CardText className="CardTextClass">University of Ottawa<br></br>
                                Sep 2019 - Mar 2021</CardText>
                        </Card>
                    </Col> 

                    <Col  md={8} className=" my-3 mb-0">
                        <div>
                        <List className="li-text-left">
                        <li className="li-text-left">Research assistant.</li>
                        <li className="li-text-left">Scholarship: <b>Special scholarship.</b> </li>
                        <li className="li-text-left">Propose and implement a Spectral Forcing Method to improve combustion simulation performance. Obtain its results by performing parallel programming on a High Performance Computing system with more than <b>1000 CPUs</b>.</li>
                        <li className="li-text-left">More than 1 year of experience in <b>Parallel Computing</b>.</li>
                        <li className="li-text-left">Work collaboratively with several project teams.</li>
                        <li className="li-text-left">Courses: Data Science Applications(A+), <br></br>Internet Technologies and Mobile Commerce(A), <br></br>Deep learning and Reinforced Learning(audit). </li>
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
                            <CardTitle tag="h4" className= "CardTitleClass">Physics Teacher</CardTitle>
                            <CardText  className="CardTextClass">New Oriental Education & Technology Group<br></br>
                                Sep 2015 - Aug 2019</CardText>
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
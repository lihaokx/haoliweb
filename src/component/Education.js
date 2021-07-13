import React from 'react';
import {    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row, Button, List} from 'reactstrap';const Education = () => {
  return (
    
    <div >
        <div className="container educationContainer  ">
            <hr></hr>
                <h2>Professional experience</h2>
            <hr></hr>


            <div className="row my-4 mx-md-5">
            <Card className="projectCard  col-10 mainCard">
                <Row className=" align-items-center"> 
                    <Col  md={4} className="mx-md-3 my-3" >
                        <Card  body className="justify-content-center" >
                            <CardTitle tag="h4" className= "CardTitleClass">Self-taught Coder</CardTitle>
                            <CardText className="CardTextClass">Coursera<br></br>
                                April 2020 - Present 2021</CardText>
                        </Card>
                    </Col> 

                    <Col  md={7}  className=" my-3">
                        <div>
                        <List className="li-text-left mb-0" >
                            <li className="li-text-left">Front-end:  HTML, CSS, JS, React, Bootstrap, Redux, JQuery</li>
                            <li className="li-text-left">Back-end: Java, JavaScript, Python</li>
                            <li className="li-text-left">Database： MongoDB, SQL</li>
                            <li className="li-text-left">Data Science: Scikit-learn, Gensim, NLTK, Pandas </li>
                            <li className="li-text-left">Visualization: Matplotlib, Seaborn </li>
                            <li className="li-text-left">Data structure and algorithms</li>
                            <li className="li-text-left">18 Certificates From Coursera </li>
                            <li className="li-text-left">IELTS: Overall Band 8.0 </li>
                        </List>   
                    </div>
                    </Col>
                </Row >
            </Card>
          </div>

          <div className="row my-4  mx-md-5">
            <Card className="projectCard   col-10 mainCard">
                <Row className=" align-items-center"> 
                    <Col    md={4} className="mx-md-3 my-3">
                        <Card body className="justify-content-center">
                            <CardTitle tag="h4" className= "CardTitleClass">Master of Engineering</CardTitle>
                            <CardText className="CardTextClass">University of Ottawa<br></br>
                                Sep 2019 - Dec 2020</CardText>
                        </Card>
                    </Col> 

                    <Col  md={7} className=" my-3 mb-0">
                        <div>
                        <List className="li-text-left">
                        <li className="li-text-left">Project: Direct Numerical Simulation(DNS) of combustion process in large scale High Performance Computing(HPC).                   </li>
                        <li className="li-text-left">Research assistant.</li>
                        <li className="li-text-left">Scholarship: Special scholarship. </li>
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
                    <Col   md={4} className="mx-md-3 my-3">
                        <Card body className="justify-content-center">
                            <CardTitle tag="h4" className= "CardTitleClass">Physics Teacher</CardTitle>
                            <CardText  className="CardTextClass">New Oriental Education & Technology Group<br></br>
                                Sep 2015 - Aug 2019</CardText>
                        </Card>
                    </Col> 

                    <Col  md={7}>
                        <div>
                        <List className="li-text-left">
                        <li className="li-text-left">Teach senior high school students basic programming skills.</li>
                        <li className="li-text-left">Teach senior high school students physics.</li>
                        <li className="li-text-left">Train new teachers.</li>
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
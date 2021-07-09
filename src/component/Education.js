import React from 'react';
import {    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row, Button, List} from 'reactstrap';const Education = () => {
  return (
    
    <div >

        <div className="container">
          <div className="row my-4">
            <Card className="projectCard col col-md-10 mx-auto">
                <Row className="justify-content-center align-items-center"> 
                    <Col  md={3}>
                        <Card  body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle tag="h5">Self-taught Coder</CardTitle>
                            <CardText>Coursera<br></br>
                                Aug 2019 - Present 2021</CardText>
                        </Card>
                    </Col> 

                    <Col  md={6}>
                        <div>
                        <List className="li-text-left">
                            <li className="li-text-left">Front-end: HTML, CSS, JS, React, Bootstrap, Redux, JQuery</li>
                            <li className="li-text-left">Back-end: Java, JavaScript, Python</li>
                            <li className="li-text-left">Database: MongoDB, SQL</li>
                            <li className="li-text-left">Data Science: Scikit-learn, Gensim, NLTK, Pandas </li>
                            <li className="li-text-left">Visualization: Matplotlib, Seaborn </li>
                            <li className="li-text-left">Data structure and algorithms</li>
                            <li className="li-text-left">IELTS: Overall Band 8.0 </li>
                        </List>   
                    </div>
                    </Col>
                </Row >
            </Card>
          </div>


          <div className="row my-4">
            <Card className="projectCard col col-md-10 mx-auto">
                <Row className="justify-content-center align-items-center"> 
                    <Col  md={3}>
                        <Card  body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle tag="h5">Master of Engineering</CardTitle>
                            <CardText>University of Ottawa<br></br>
                                Sep 2019 - Dec 2020</CardText>
                        </Card>
                    </Col> 

                    <Col  md={6}>
                        <div>
                        <List className="li-text-left">
                        <li className="li-text-left">Direct Numerical Simulation(DNS) of combustion process in large scale High Performance Computing(HPC) by fortran source code.                   </li>
                        <li className="li-text-left">Research assistant</li>
                        <li className="li-text-left">Scholarship: Special Schlarship. </li>
                        <li className="li-text-left">Course: Data Science Applications(A+), Internet Technologies and Mobile Commerce(A), Deep learning and Reinforced Learning(audit). </li>
                        </List>   
                    </div>
                    </Col>
                </Row >
            </Card>
          </div>


          <div className="row my-4">
            <Card className="projectCard col col-md-10 mx-auto">
                <Row className="justify-content-center align-items-center"> 
                    <Col  md={3}>
                        <Card  body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle tag="h5">Physics Teacher</CardTitle>
                            <CardText>New Oriental Education & Technology Group<br></br>
                                Sep 2015 - Aug 2019</CardText>
                        </Card>
                    </Col> 

                    <Col  md={6}>
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
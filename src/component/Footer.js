import React from 'react';
 
import {Jumbotron} from 'reactstrap';

function Footer() {
    return(
    <div>
    <hr></hr>
          <h2>Contact Me</h2>
          <hr></hr>
          <br></br>
        <Jumbotron> 
        <div className="container">
            <div className="row  justify-content-center">  
                <div className="row row-header  justify-content-center "> 
                    <div className="col-xs-12 col-md">                     
                            <a className="row  justify-content-center"  target="_blank"  href="https://www.linkedin.com/in/hao-li-654568176/">
                                <div className="col-xs-5 col-md-2 ">
                                    <i className=" fa fa-linkedin  fa-3x"></i>                
                                </div>
                                <div className="col-xs-5 col-md-5 ">
                                    <h4>Linkedin </h4>
                                    <p >Connect with me on Linkedin</p>
                                </div>
                            </a>
                    </div>
                    <div className="col-xs-12 col-md justify-content-center">                     
                        <a className="row justify-content-center"   href="mailto:lihaokx@gmail.com">
                            <div className="col-xs-5 col-md-2 ">
                                <i className="  fa fa-envelope  fa-3x"></i>                
                            </div>
                            <div className="col-xs-5 col-md-5 ">
                                <h4>Email </h4>
                                <p  >lihaokx@gmail.com</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row row-header  top-buffer justify-content-end ">
                    <div className="col-xs-12 col-md ">                     
                            <a className="row justify-content-center"  target="_blank"  href="https://github.com/lihaokx">
                                <div className="col-xs-5 col-md-2 ">
                                    <i className=" fa fa-github  fa-3x"></i>                
                                </div>
                                <div className="col-xs-5 col-md-5 ">
                                    <h4>Github: lihaokx </h4>
                                    <p>Learn from my projects  </p>
                                </div>
                            </a>
                    </div>
                    <div className="col-xs-12 col-md  ">                     
                        <a className="row justify-content-center"  target="_blank"  href="https://www.youtube.com/channel/UCSD1SEoKjQQFcuOWPSOUhTg">
                            <div className="col-xs-5 col-md-2 ">
                                <i className="  fa fa-youtube  fa-3x"></i>                
                            </div>
                            <div className="col-xs-5 col-md-5 ">
                                <h4>YouTube</h4>
                                <p>Hao Li Coder - 程序员</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      
    </Jumbotron>
    </div> 
    )
}

export default Footer;
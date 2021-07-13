import React, { Component } from 'react';
import { Gi3DStairs } from "react-icons/gi";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
            import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import headBackground from './keyboard.jpg';
 
const Header = () => {
    return(
    <React.Fragment>
      <Jumbotron  className="headerJumbotron my-auto "  style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/keyboard.jpg'})`  ,backgroundSize: 'cover', backgroundPosition: 'center'  }} >
           <div className="container "  >
               <div className="row row-header">
                   <div className="col-12 col-sm-9  off ">
                       <h1  className="headerText " >Welcome to Hao Li's Website</h1>
                   </div>
               </div>
           </div>
       </Jumbotron>
     
     
    </React.Fragment>
    );
  }
 

export default Header;
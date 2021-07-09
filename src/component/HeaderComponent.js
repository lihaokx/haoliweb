import React, { Component } from 'react';
import { Gi3DStairs } from "react-icons/gi";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
            import { NavLink } from 'react-router-dom';
import { useState } from 'react';
 
const Header = () => {
    return(
    <React.Fragment>
      <Jumbotron  className="headerJumbotron my-auto">
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-12">
                       <h1  className="display-3">Welcome to Hao Li's Website</h1>
 
                        {/* <Gi3DStairs className="App-logo"/> */}
                        {/* <Gi3DStairs size="1x"   style={{
     position: 'absolute',
     top: 0,
     left: 0,
     right: 16,
     bottom: 0,
   }} */}
 {/* /> */}
                   </div>
               </div>
           </div>
       </Jumbotron>
     
     
    </React.Fragment>
    );
  }
 

export default Header;
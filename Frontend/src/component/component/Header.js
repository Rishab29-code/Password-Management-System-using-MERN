import React from 'react';
import {connect } from 'react-redux';
import {Link,Routes,Route} from 'react-router-dom';
import {logoutuser} from '../redux'
import {Navbar,Nav,NavDropdown,Container, Button} from 'react-bootstrap';
import UserProfile from './UserProfile';





function Header(props){
    return(
        <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Password Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
           
            <Link to="#" role="button" data-rr-ui-event-key="#" className="nav-link" tabIndex="0">Category</Link>
           
            <NavDropdown title="Password" id="basic-nav-dropdown">
            <Link to="#" data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabIndex="0">View All Password</Link>
              <Link to="#" data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabIndex="0">View All Password</Link>
            </NavDropdown>
            <NavDropdown title={props.userDetails.username} id="basic-nav-dropdown">
            <Link to="/userprofile" data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabIndex="0">View Profile</Link>
              <Link to="/" onClick={()=>props.logoutuser()}data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabIndex="0">Logout</Link>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes><Route path="/userprofile" element={<UserProfile/>}/></Routes>
    </div>
    )
}
const mapStatetoProps=(state)=>{
  return{
    userDetails:state.user.userDetails,
    msg:state.user.msg
  }
}
const mapDispatchtoProps=(dispatch)=>{
  return{
    logoutuser:function(){
      dispatch(logoutuser())
    }
  }
}
export default connect(mapStatetoProps)(Header);
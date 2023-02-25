import React,{useState} from 'react';
import {connect} from 'react-redux';
import { signupuser} from '../redux';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';

function SignupContainer(props){

    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmpassword] = useState('');
    return(
        <Container  >
            <Row>
                <Col>
                <h1>Signup User</h1>
            <p>{props.msg}</p>
            <Form className="form1">
        <Form.Group className="mb-3" controlId="formBasicEmail2">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" defaultValue={props.username}  onChange={e=>setusername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" defaultValue={props.email} onChange={e=>setemail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" defaultValue={props.password} onChange={e=>setpassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword4">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder=" Confirm Password" defaultValue={props.confirmPassword} onChange={e=>setconfirmpassword(e.target.value)} />
        </Form.Group>
        <p>Already have a account=><a href="/">Login</a></p>
        
        <Button variant="primary" type="submit" onClick={()=>props.signupuser(username,email,password,confirmPassword)}>
          Signup
        </Button>
      </Form>
           

                </Col>
                <Col>
                
                </Col>
            </Row>
            
        </Container>
    )
}
const mapStatetoProps=(state)=>{
    return{
       username:state.user.username,
       email:state.user.email,
       password:state.user.password,
       confirmPassword:state.user.confirmPassword,
       msg:state.user.msg
    }
}
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
       signupuser:function(username,email,password,confirmPassword){
           dispatch(signupuser(username,email,password,confirmPassword));
       }
       
       
    }
   }
export default connect(mapStatetoProps,mapDispatchtoProps)(SignupContainer);
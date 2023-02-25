import React,{useState} from 'react';
import {connect} from 'react-redux';
import {loginuser } from '../redux';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';

function LoginContainer(props){

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    
    return(
        <Container>
            <Row>
                <Col>
                <h1>Login User</h1>
                <Form className="form1">
                    <p>{props.msg}</p>
        <Form.Group className="mb-3" controlId="formBasicEmail6">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" defaultValue={props.username}  onChange={e=>setusername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail7">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" defaultValue={props.password} onChange={e=>setpassword(e.target.value)} />
        </Form.Group>
        <p><a href="/signup">Create New Account</a></p>
        <Button variant="primary" type="submit" onClick={()=>props.loginuser(username,password)}>
          Login
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
       password:state.user.password,
       msg:state.user.msg
    }
}
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
       
       loginuser:function(username,password){
        dispatch(loginuser(username,password));
    }
       
    }
   }
export default connect(mapStatetoProps,mapDispatchtoProps)(LoginContainer);
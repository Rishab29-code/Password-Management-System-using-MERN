import React from 'react';
import {connect} from 'react-redux';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';
import Defaultpic from '../uploads/emptyprofile.png';
import axios,* as others from 'axios';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:this.props.username,
            email:this.props.email,
            msg:this.props.msg,
            profileImage:this.props.profileImage,
            user_id:this.props.user_id,
            uploadFile:null
        }
        
    }
    fetchUserDetails=(user_id)=>{
       axios.get("http://localhost:5000/useapi/getUserDetails/"+user_id,{
        headers: {
        "Content-Type":"application/json"
       }
    }).then(
        res=>{
            this.setState({email:res.data.results[0].email});
            this.setState({profileImage:res.data.results[0].profileImage})

    }).catch(err=>console.log(err));
    }

    
    profilechangeHandler=(event)=>{
        this.setState({uploadFile:event.target.files[0]});

    }
    profilesubmitHandler=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("profileImage",this.state.uploadFile);
        formData.append("user_id",this.state.user_id);

        axios.post("http://localhost:5000/useapi/update-profile",formData,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
          this.setState({msg:res.data.message});
          this.setState({profileImage:res.data.results.profileImage});
        })
        .catch(err=>console.log(err))

    }
    componentDidMount(){
        this.fetchUserDetails(this.state.user_id);
     }
    
   
    

    render(){
        if(this.state.profileImage){
            var imagestr=this.state.profileImage;
            console.log(imagestr);
            imagestr=imagestr.replace("public/","");
            var profilepic="http://localhost:5000/"+imagestr;
        }
        else{
            profilepic=Defaultpic;
        }
    return(
        <Container  >
            <Row>
                <Col>
                <img src={profilepic} alt="profile pic" id="image"/>
                </Col>
                <Col>
                <h1>Update User Profile</h1>
            <p>{this.state.msg}</p>
            <Form className="form1">
        <Form.Group className="mb-3" controlId="formBasicEmail2">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name"  defaultValue={this.state.username} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  defaultValue={this.state.email}  />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword4">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control type="file" name="profileImage" onChange={this.profilechangeHandler} />
        </Form.Group>
        
        
        <Button variant="primary" type="submit" onSubmit={this.profilesubmitHandler} >
          Update
        </Button>
      </Form>
       </Col>
        </Row>
       
            
        </Container>
        
    )
    }
}
const mapStatetoProps=(state)=>{
    return{
       username:state.user.userDetails.username,
       email:state.user.email,
       msg:state.user.msg,
       profileImage:state.user.profileImage,
       user_id:state.user.userDetails.userid
    }
}
   
  
export default connect(mapStatetoProps)(UserProfile);
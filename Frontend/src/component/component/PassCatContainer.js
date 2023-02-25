import React,{ useState } from 'react'
import {connect} from 'react-redux';
import { addPassCat,updatePassCat} from '../redux';
import { Button,Container,Form,Row,Col } from 'react-bootstrap';
import GetPassCatContainer from './GetPassCatContainer';

function PassCatContainer(props) {
    const [category, setCategory] = useState('');
    if(props.action==='Add'){
    var actionButton=<Button  variant="primary" onClick={()=>props.addPassCat(category,props.user_id)}>Add</Button>
    }
    else{
     actionButton=<Button variant="primary" onClick={()=>updatePassCat(props.id,category,props.user_id)}>Update</Button>
    }
    return(
        <Container className="Container">
            <Row>
                <Col>
                <h1>{props.action} Password Category</h1>
                <h1>Category-{props.category}</h1>
                <p>{props.msg}</p>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password Category</Form.Label>
        <Form.Control type="text" defaultValue={props.category} onChange={e=>setCategory(e.target.value)} />

      </Form.Group>
      {actionButton}
      
       
    </Form>
             </Col>
            <Col>
          <GetPassCatContainer/>
            </Col>
            </Row>
        </Container>
    )
    
   
   
}

const mapStatetoProps=(state)=>{
 return{
    category:state.pass.category,
    action:state.pass.action,
    id:state.pass.id,
    user_id:state.user.userDetails.userid,
    msg:state.pass.msg
 }
}

const mapDispatchtoProps=(dispatch)=>{
 return{
    addPassCat:function(category,user_id){
        dispatch(addPassCat(category,user_id));
    },
    updatePassCat:function(id,category,user_id){
      dispatch(updatePassCat(id,category,user_id));
    }
 }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(PassCatContainer);
import React,{useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchPassCat,editPassCat,deletePassCat} from '../redux';
import {Table,Button} from 'react-bootstrap';



function GetPassCatContainer(){
    const user_id = useSelector(state=>state.user.userDetails.userid);
     const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPassCat(user_id));
    })
    
    const getallCategories = useSelector(state=>state.pass.allCategories);
    if (getallCategories){
        var data=getallCategories.map((val,i)=>(
            <tr key={i}>
              <td key={val._id}>{i+1}</td>
            <td>{val._id}</td>
            <td>{val.category_name}</td>
            <td><Button className="btn btn-primary" onClick={()=>editCategory(val._id,val.category_name)}>Edit</Button>
            <Button className="btn btn-danger" onClick={()=>deleteCategory(val._id)}>Delete</Button></td>
        </tr>
          ))

    }
    else
    {
        data=<tr>
            <td colspan="4">No Records Found</td>
        </tr>
    }
    const editCategory=(id,category)=>{
        dispatch(editPassCat(id,category));
     }
     const deleteCategory=(id)=>{
        dispatch(deletePassCat(id));
     }
     
    return (
    <center>
        <h1>All Categories</h1>
        <Table border="1">
            <thead>
                <tr>
                    <th>#</th>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                { data }
                
            </tbody>
           
        </Table>
    
    </center>
    );
}


export default GetPassCatContainer;
import {ADD_PASSCAT,FETCH_PASSCAT,EDIT_PASSCAT,UPDATE_PASSCAT,DELETE_PASSCAT} from './passType';
import axios,* as others from 'axios';


export const addPassCat=(category,user_id)=>{
    const OPTIONS = {
        url: "http://localhost:5000/catapi/add-category",
        method: "POST",
        data:{pass_cat:category,user_id:user_id},
        headers: {"Content-Type":"application/json"}
        }
        axios(OPTIONS).then(res=>console.log(res)).catch(err=>console.log(err));
    return{
        type:ADD_PASSCAT,
        payload:category
    }
}
 
export const fetchPassCat=(user_id)=>{

    return function(dispatch){

        const OPTIONS1 = {
            url: "http://localhost:5000/catapi/getCategory/"+user_id,
            method: "GET",
            headers: {"Content-Type":"application/json"}
            }
            axios(OPTIONS1)
            .then(res=>{
                const categories=res.data.results;
                dispatch(getPassCat(categories));
            })
            .catch(err=>console.log(err));
      
        
      }

}
export const getPassCat=(categories)=>{
    return {
        type:FETCH_PASSCAT,
        payload:categories
    }
   
}
export const editPassCat=(id,category)=>{
    return {
        type:EDIT_PASSCAT,
        payload:category,
        id:id
    }
   
}
export const updatePassCat=(id,category)=>{

        const OPTIONS1 = {
            url: "http://localhost:5000/catapi/update-Category",
            method: "PATCH",
            data:{_id:id,pass_cat:category},
            headers: {"Content-Type":"application/json"   }
            }
            axios(OPTIONS1)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>console.log(err));
    return {
        type:UPDATE_PASSCAT,
        payload:category,
    }
   
 
}
export const deletePassCat=(id)=>{
    const OPTIONS1 = {
        url: "http://localhost:5000/catapi/delete-category",
        method: "DELETE",
        data:{cat_id:id},
        headers: {"Content-Type":"application/json"   }
        }
        axios(OPTIONS1)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err));

    return {
        type:DELETE_PASSCAT,
        payload:id
    }
   
}







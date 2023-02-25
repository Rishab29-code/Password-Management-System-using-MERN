import {SIGNUP_USER,LOGIN_USER,SET_CURRENTUSER, LOGOUT_USER} from './userType';
import axios,* as others from 'axios';
import setAuthorizationToken from './setAuthorizationToken';
import jwt_decode from 'jwt-decode';
export const signupuser=(username,email,password,confirmPassword)=>{
    return function(dispatch){
    const OPTIONS = {
        url: "http://localhost:5000/useapi/signup",
        method: "POST",
        data:{
            username:username,
            email:email,
            password:password,
            confirmPassword:confirmPassword
        },
        headers: {
            "Content-Type":"application/json"
           }
        }
        axios(OPTIONS).then(res=>{
            const data=res.data.message;
            dispatch({
                type:SIGNUP_USER,
                payload:data
            })
        
        }
        ).catch(err=>console.log(err));
    
    }
}

export const loginuser=(username,password)=>{
    return function(dispatch){
        const OPTIONS = {
            url: "http://localhost:5000/useapi/login",
            method: "POST",
            data:{
                username:username,
                password:password
            },
            headers: {"Content-Type":"application/json"}
            }
            axios(OPTIONS).then(res=>{
                const message=res.data.message;
                if(message==='User Found'){
                    const token=res.data.token;
                    localStorage.setItem("jwtToken",token);
                    setAuthorizationToken(token);
                    dispatch(setcurrentuser(jwt_decode(token)));
                    dispatch({
                        type:LOGIN_USER,
                        payload:message,
                        isLoggedin:true
                        
                    })
                
                }
                else{
                    dispatch({
                        type:LOGIN_USER,
                        payload:message,
                        isLoggedin:false
                    })
                }
                
            }
            ).catch(err=>console.log(err));


            
    }
}
export const setcurrentuser=(user)=>{
    return {
        type:SET_CURRENTUSER,
        payload:user
    }
}
export const logoutuser=()=>{
    return function(dispatch){
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setcurrentuser({}));

        dispatch({
            type:LOGOUT_USER
        })
    }
}
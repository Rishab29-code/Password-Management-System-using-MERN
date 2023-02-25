import React from 'react'
import { useSelector} from 'react-redux';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignupContainer';
import PassCatContainer from './PassCatContainer';
import Header from './Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function MainContainer(props) {
    const isUserlogged=useSelector(state=>state.user.isLoggedIn);

    if(isUserlogged===false){
        var callcontainer=<Routes><Route exact path="/" element={<LoginContainer/>}/><Route path="/signup" element={<SignupContainer/>}/></Routes>
    }
    else{
         callcontainer=<><Header/><Routes>< Route exact path="/" element={<PassCatContainer/>}/></Routes></>
    }

    return(
        <Router>
        {callcontainer}
        </Router>
    )

}



export default MainContainer;
import React from 'react';
import {Provider} from 'react-redux';
import MainContainer from './component/MainContainer';
import SetToken from './redux/action/setAuthorizationToken';
import { logoutuser, setcurrentuser } from './redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import './App.css';


function App(){
  if(localStorage.jwtToken){
    SetToken(localStorage.jwtToken);
    store.dispatch(setcurrentuser(jwt_decode(localStorage.jwtToken)));
    store.dispatch(setcurrentuser(jwt_decode(localStorage.jwtToken)));
  }
  

 
  return (
  <Provider store={store}>
  <div>
  <MainContainer/>
  </div>
  </Provider>
  ); 

}

export default App;
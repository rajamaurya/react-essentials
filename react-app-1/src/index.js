import React, {lazy, Suspense} from 'react';
import { LocationProvider, createHistory } from '@reach/router';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthGuard from "./AuthGaurd";
import { store } from './store';
import Login from './Components/login/Login';
import LoginModel from './Components/login/LoginModel';
import Profile from './Components/Profile';
import PostForm from './Components/post/PostForm';
import postService, { PostServiceContext } from './service/postService';
import Post from './Components/post/post';
const Home =  React.lazy(()=> import('./home') ) ;
// const Login =  React.lazy(()=> import('./Components/login/Login'));
const About =  React.lazy(()=> import('./about') ) ;



let history = createHistory(window);

const Routings = ()=>{
  return (
        // <LocationProvider history={history}>
          <Routes>
            
              <Route path = "" element={ <App />} />
              <Route path = "/signup" element={<LoginModel />} />
              <AuthGuard exact path = "/profile" element = {<Profile/>} /> 
              <postService>
               <Route path = "/post" element = {<Post />} />
              </postService>
              <Route path = "/about" exact element = {<About/>} />
              <Route path = "/home" exact element = {<Home />} />
              <Route path = "/login" exact element = {<Login />} />
              
           </Routes>
        // </LocationProvider>
  )
}


//</React.Suspense>
ReactDOM.render(
    <BrowserRouter>
    <Suspense fallback={<div className = "loader">Loading...</div>}>
        <Provider store = {store}>
          <Routings />,
        </Provider>
      </Suspense>
    </BrowserRouter>,
       
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

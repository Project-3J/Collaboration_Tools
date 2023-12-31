import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { useState } from "react";
import axios from'axios';
import { useNavigate } from "react-router-dom";
import login from './login.png';
//import refreshToken from "../path/to/utils";
//import { setLoggedIn } from "../store/authSlice";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";


function Login() {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  //const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const originData = 'client_id:client_secret';
    

    //accesstoken 요청 함수
    function getToken(){
      //const expiresIn = localStorage.getItem(res.data.expires_in); // 토큰 만료 시간

      console.log(window.btoa(originData));
  
      axios.post('http://localhost:8080/oauth/token?grant_type=password&username=test1&password=test2',
        {},
        {
          headers:{ 
            'Authorization': 'Basic '+window.btoa(originData)} 
        }
      ).then( res => {
        console.log(res);
        if(res.status === 200 ) {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          navigate("/ProjectSelect");
        // handleLoginSuccess(res);
        
        }
      })
      .catch((error) => {
        console.log(error);
        alert('아이디 또는 패스워드를 확인해주세요')
        });
    }
    

  // 회원가입 누를 때 
  function handleSignUp(){
    navigate("/SignUp");
  }
 
  return (    
      <div className='login-layout'>
        <div className="login-all">
          <div className="login-logo">5oz</div>
          <Form className="form" >
            <Form.Group className="form-email" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className ='form-email1' type="text" defaultValue="test1" placeholder="xxxx@ozsoftware.com" />
            </Form.Group>

            <Form.Group className="form-password" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" defaultValue="test2"  placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="button" className="btn-log" onClick={getToken}>
              Login
            </Button>
            <Button className='btn-signup' onClick = {handleSignUp}>
              SignUp
            </Button>
          </Form>

          <div className = "form-img">
          <img
            className="img-login"
            src={login}
            alt="Second slide"
          />
          </div>
        </div>
      </div>
  );
}

export default Login;

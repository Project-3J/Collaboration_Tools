import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function SignUp() {
    // SignUp 컴포넌트의 내용을 작성합니다.
    const [userId, setUserId] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userTel, setUserTel] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleUserIdChange = (e) => {
      setUserId(e.target.value);
    };

    const handleUserEmailChange =(e) => {
      setUserEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };

    const handleUserTelChange = (e) => {
      setUserTel(e.target.value);
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (!userId || !userEmail || !password || !confirmPassword || !userTel) {
        alert('모든 항목을 입력해주세요');
      } else if (password !== confirmPassword) {
        setError('비밀번호가 일치하지 않습니다.');
      } else {
        try {
          const response = await axios.post('서버 URL', {
            userId,
            userEmail,
            password,
            userTel
          });
    
          if (response.status === 200) {
            alert('회원가입이 완료되었습니다.');
            setUserId('');
            setUserEmail('');
            setPassword('');
            setConfirmPassword('');
            setUserTel('');
            setError('');
            navigate("/Login.js");
          } else {
            setError('서버로의 요청이 실패했습니다.');
          }
        } catch (error) {
          setError('서버에 연결할 수 없습니다.');
        }
      }
    };

    return (
    <div>  
      <div className='signupwrap'>
        <div className='signupheader'>
            Sign Up
        </div>
      </div>
        <Form className='signupform'>
          {/* 회원가입에 필요한 입력 필드들과 버튼을 작성합니다. */}
          {/* 예시: 이름, 이메일, 비밀번호 입력 필드 */}
          <Form.Group className="signupemail">
            <Form.Label>이메일</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="이메일"
            value = {userEmail}
            onChange = {handleUserEmailChange} />
          </Form.Group>
          <Form.Group className="signupid">
            <Form.Label>아이디</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="아이디"
            value = {userId}
            onChange = {handleUserIdChange} />
          </Form.Group>
          <Form.Group className="signupetel">
            <Form.Label>전화번호</Form.Label>
            <Form.Control 
            type='tel' 
            placeholder="전화번호"
            value = {userTel}
            onChange = {handleUserTelChange} />
          </Form.Group>
          <Form.Group className="signuppassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="비밀번호"
            value = {password}
            onChange = {handlePasswordChange} />
          </Form.Group>
          <Form.Group className="signuppasswordcheck">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="비밀번호 확인"
            value = {confirmPassword}
            onChange ={handleConfirmPasswordChange}  />
          </Form.Group>
          <Button className='signupbtn' 
          variant="primary" 
          type="submit"
          onSubmit = {handleSubmit}>
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }


export default SignUp;
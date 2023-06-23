import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function SignUp() {
    // SignUp 컴포넌트의 변수 작성
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    
    const handleUserIdChange = (e) => {
      setUserId(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleNameChange = (e) =>{
    setName(e.target.value);
    }

    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    }

    const handleUserEmailChange =(e) => {
      setEmail(e.target.value);
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
        try {
          const data = {
            "userId" : userId,
            "password": password,
            "name": name,
            "phone": phone,
            "email": email
          };

          const response = await axios.post('http://localhost:8080/accounts', data);
          console.log(response);
    
          if (response.status === 202) {
            alert('회원가입이 완료되었습니다.');
            setUserId('');
            setPassword('');
            setName('');
            setPhone('');
            setEmail('');
            setError('');
            navigate("/Login");
          } else {
            setError('서버로의 요청이 실패했습니다.');
          }
        } catch (error) {
          setError('서버에 연결할 수 없습니다.');
        }
    };

    return (
    <div>  
      <div className='signupwrap'>
        <div className='signupheader'>
            Sign Up
        </div>
      </div>
        <Form className='signupform'
        onSubmit = {handleSubmit}>
          {/* 회원가입에 필요한 입력 필드들과 버튼을 작성합니다. */}
          {/* 예시: 이름, 이메일, 비밀번호 입력 필드 */}
          <Form.Group className="signupid">
            <Form.Label>아이디</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="아이디"
            value = {userId}
            onChange = {handleUserIdChange}
            required />
          </Form.Group>
          <Form.Group className="signuppassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="비밀번호"
            value = {password}
            onChange = {handlePasswordChange}
            required />
          </Form.Group>
          <Form.Group className="signupname">
            <Form.Label>이름</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="이름"
            value = {name}
            onChange = {handleNameChange}
            required />
          </Form.Group>
          <Form.Group className="signupetel">
            <Form.Label>전화번호</Form.Label>
            <Form.Control 
            type='tel' 
            placeholder="전화번호"
            value = {phone}
            onChange = {handlePhoneChange}
            required />
          </Form.Group>
          <Form.Group className="signupemail">
            <Form.Label>이메일</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="이메일"
            value = {email}
            onChange = {handleUserEmailChange}
            required />
          </Form.Group>
          <Button className='signupbtn' 
          variant="primary" 
          type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }


export default SignUp;
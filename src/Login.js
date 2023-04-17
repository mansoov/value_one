import './Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();
    
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const userData = {
          email: Email,
          password: Password
      };
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/user-service/login', userData);
          // const response = await axios.post('http://3.37.11.78:8000/user-service/login', userData);
          
          console.log('Submitting user data to Login:', userData);
          // 토큰이 있는 경우 인증 성공으로 처리
          if (response.headers.token) {
            setStatus('인증에 성공하였습니다.');
            
            // 토큰을 로컬 스토리지에 저장
            localStorage.setItem('token', response.headers.token);
                        
            navigate('/RobotInfo');
          
          } else {
            setStatus('인증에 실패하였습니다. 다시 시도해주세요.');           
          }
        } catch (error) {
          console.error(error);
          setStatus('오류가 발생했습니다. 다시 시도해주세요.');
        }
      };

    return (
        <div style={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center', 
        width: '100%', height: '100vh'
        }}>
        <form style={{ display: 'flex', flexDirection: 'column'}}
            onSubmit={onSubmitHandler}            
        >

        <h1>로그인</h1>        
          <label>
            E-mail:
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">로그인</button>
        
        {status && <p>{status}</p>}
       
        <Link to="/SignUp">계정 만들기</Link>                  
        </form>
      </div>

    );
};

export default Login;
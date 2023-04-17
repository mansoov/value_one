import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RobotInfo = () => {  
  const [robotData, setRobotData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRobotData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('로그인이 필요합니다.');
          navigate('/Login');          
          return;
        }

    const response = await axios.get('http://127.0.0.1:8000/robot-service/robots');       
    // const response = await axios.get('http://3.37.11.78:8000/robot-service/robots');       
    const data = response.data;

    // 만약 받아온 데이터가 객체이면, 배열 형태로 변환합니다.
    const robotArray = Array.isArray(data) ? data : [data];

    setRobotData(robotArray);
    } catch (error) {
        console.error(error);
        alert('로봇 정보를 가져오는 데 실패했습니다. 다시 시도해주세요.');
      }
    };

    fetchRobotData();
    const intervalId = setInterval(fetchRobotData, 1000); 

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌을 제거합니다.
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
  };
  
    
  return (
        <div style={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', flexDirection: 'column', 
        }}
        >

        <h1>로봇 정보 화면입니다</h1>        
        <ul>
        {robotData.map((robot, index) => (
          <li key={index}>
            로봇 {index}: {robot.current_posj_0}, {robot.current_posj_1}, {robot.current_posj_2},{' '}
            {robot.current_posj_3}, {robot.current_posj_4}, {robot.current_posj_5} ({robot.now})
          </li>
        ))}
      </ul>
        
        <div style={{ marginTop: '20px' }}>
        <Link to="/Login">
        <button onClick={handleLogout}>로그인 화면으로</button>
        </Link>      
      </div> 
     </div>
    );
};

export default RobotInfo;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Pwd, setPassword] = useState("");
    const navigate = useNavigate();

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const userData = {
            email: Email,
            name: Name,
            pwd: Pwd,
        };

        console.log('Submitting user data to the REST API:', userData);

        try {
            // const response = await axios.post('http://127.0.0.1:8000/user-service/users', userData);
            const response = await axios.post('http://3.37.11.78:8000/user-service/users', userData);
            console.log(response);

            // setEmail('');
            // setName('');
            // setPassword('');       
            
            navigate('/Login');                   

        } catch (error) {
            console.error('Error submitting data to the REST API:', error.response ? error.response.data : error.message);

        }
    }    

    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}            
            >
            
                <h1>회원가입</h1>            
                <p>이곳은 회원가입 페이지 입니다.</p>            

                <label>Name</label>
                    <input type='text' value={Name} onChange={onNameHandler}/>

                <label>Email</label>
                    <input type='email' value={Email} onChange={onEmailHandler}/>                

                <label>Password</label>
                    <input type='password' value={Pwd} onChange={onPasswordHandler}/>
                
                <button type="Submit">회원가입</button>
            
            </form>

        </div>
    );
}
export default SignUp;
import {  NavLink } from 'react-router-dom';
import React from 'react';
import img_logo from "./img/logo.png";
import './Home.css';

const Home = () => {
    return (        
        <div className="Home">
            <header className='Home-header'>            
                <NavLink to={"Login"}>
                < img src={img_logo} className="Home-image" alt="로고 이미지" />                    
                </NavLink>
            </header>
        
        </div>    
    );
};

export default Home;
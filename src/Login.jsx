import React from 'react'
import logo from './Background/netflix-logo.png'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import logo2 from './Background/netflix_PNG10.png'
import { useState } from 'react';


function Login() {
    const [email,setEmail]= useState('');
    const navigate = useNavigate();

    const handleLogin=()=>{

        navigate('/password',{state:{email}});
    }

    const handleSignIn=()=>{
        navigate('/')
    }
  return (
    <div>
        <div className='main1'>
            <div className='overlay1'>
                <div className='head1'>
                    <img src={logo} alt="" className='logo1'/>
                    <img src={logo2} alt="" className='logo2'/>
                    <button className='SignInButton1' onClick={handleSignIn}>Sign In</button>
                </div>
                <div className='base'>
                    <center>
                <div className='mid1'>
                    
                    <p className='one'>Unlimited movies, TV </p>
                    <p className='one1'>shows and more</p>

                    <p className='two'>Starts at ₹149. Cancel at any time.</p>

                    <p className='three'>Ready to watch? Enter your email to create or restart your membership.</p>

                    <input type="email" className='email1' placeholder='Email address'  onChange={(e)=> setEmail(e.target.value)} required/>
                    <button className='GetStartedButton1' onClick={handleLogin}>Get Started </button>
                    
                </div>
                </center>
                </div>
            </div>
        </div>
        <div className='base3'>
        <div className='below'>
           
        </div>
        <div className='belowBody'>
                
        </div>
        <div className='belowHead'>
            <div className='head2'>
            <p>Trending Now</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login

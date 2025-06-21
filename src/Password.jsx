import React from 'react'
import './Password.css'
import logo from './Background/netflix-logo.png'
import logo2 from './Background/netflix_PNG10.png'
import { useLocation,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Password() {
  const location = useLocation();
  const navigate = useNavigate();
  const [password,setPassword]=useState('');

  const email = location.state?.email;

  const handleNext =async()=>{
    try{
      const res = await
      axios.post('https://netflixbackend-wgic.onrender.com/api/user/register',{
        email,
        password
      });
      alert(res.data.message);
      navigate('/home')
    }
      catch(err){
        alert(err.response?.data?.message || 'Login Faild');

      }
    };

    if(!email) return <p>No email provided. please go back</p>;
  return (
    <div className='password-body'>
      <div className='Password-head'>
                    <img src={logo} alt="" className='password-logo-desktop'/>
                    <img src={logo2} alt="" className='password-logo-mobile'/>
                    <b className='password-SignInButton'>Sign In</b>
                </div><hr />
        <div className='password-base'>
            <div className='password-base-content'>
            <p className='welcome'>Welcome!</p>
            <p className='welcome'>Joining Netflix is easy.</p>
            <p className='enter'>Enter your password and you'll be watching in no time.</p>
            <p className='enter'>Email</p>
            <p></p>
            <input type="password" placeholder='Enter Your password' className='password-input' onChange={(e)=> setPassword(e.target.value)} required/>
            <p></p>
            <a href="sd">Forgot your Password?</a><br />
            <button className='password-next-button' onClick={handleNext}>Next</button>
            </div>
        </div>

    </div>
  )
}

export default Password

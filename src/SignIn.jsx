import React from 'react'
import logo from './Background/netflix-logo.png'
import './SignIn.css'
import { useNavigate } from 'react-router-dom';



function SignIn() {
  const navigate = useNavigate();
  const handleSignUp =()=>{
    navigate('/')
  }
  return (
    <div>
      <div className='main'>
        <div className='overlay'>
                        
                      <div className='head'>
                          <img src={logo} alt="" className='logo'/>
                      </div>
                      <div className='base'>
                      <div className='mid'>
                        <div className='sign'>
                        <b>Sign In</b>
                        </div>
                        <div className='input'>
                            <input type="email" placeholder='Email' className='email'/>
                            <input type="password" placeholder='Password' className='pass'/>
                                <div className='alert'>
                                    <p>Enter valid email</p>
                                </div>
                        <button className='signInButton'>Sign In</button><br />
                        <input type="checkbox" className='checkbox'/> <label htmlFor="remmember" className='check'>Remember me</label>
                        <p className='new'>New to Netflix?<b className='new1' onClick={handleSignUp}>Sign up now.</b></p>
                        <p className='just'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                        <p className='link'><a href='yuy'>Learn more.</a></p>
                        </div>
                        </div>                     
                  </div>
              </div>
              <div>
              </div>
              </div>

              </div>
  )
}

export default SignIn

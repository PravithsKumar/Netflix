import React from 'react'
import logo from './Background/netflix-logo.png'
import './Login.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Button} from '@mui/material' 

function Login() {
  return (
    <div>
        <div className='main'>
            <div className='overlay'>
                <div className='head'>
                    <img src={logo} alt="" className='logo'/>
                    <button className='SignInButton'>Sign In</button>
                </div>

                <div className='mid'>
                    <center>
                    <p className='one'>Unlimited movies, TV </p>
                    <p className='one1'>shows and more</p>

                    <p className='two'>Starts at ₹149. Cancel at any time.</p>

                    <p className='three'>Ready to watch? Enter your email to create or restart your membership.</p>

                    <input type="email" className='email' placeholder='Email address'/>
                    <Button component="button" className='GetStartedButton' disableElevation disableRipple variant='text' endIcon={<ChevronRightIcon/>}>Get Started</Button>
                    </center>
                </div>
            </div>
        </div>
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
  )
}

export default Login

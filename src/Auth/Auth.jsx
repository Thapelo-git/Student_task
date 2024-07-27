import React, { useState } from 'react'
// import '../Auth/Auth.css'
import SignIn from './SignIn'
import SignUp from './SignUp'
const Auth = () => {
    const [isRegister, setIsRegister] = useState(false)
    const togglePanel = () => {
        setIsRegister(!isRegister)
    }
    return (
        <div className='flex justify-center h-screen items-center overflow-hidden'>
            <div className='box lg:max-w-4xl'>
                <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
                    {/* <div className='front'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqDRAlLMCN3MdjQCgfSCmfnSpVBGiyI-sHcgZxw1BnLSU37AjspUSmO3vb_NNj8HcONc&usqp=CAU' 
                        alt='' />
                    </div>
                    <div className='back'>
                    <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqDRAlLMCN3MdjQCgfSCmfnSpVBGiyI-sHcgZxw1BnLSU37AjspUSmO3vb_NNj8HcONc&usqp=CAU' 
                    alt=''/>
                    </div> */}
                </div>
                <div className='forms h-full'>
                    <div className='form-content h-full'>
                    
                        <div className='login-form'>
                        <SignIn />
                        </div>
                        {/* <div className='signup-form'>
                        <SignUp />
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Auth
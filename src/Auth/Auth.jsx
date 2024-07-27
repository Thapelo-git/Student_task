import React, { useState } from 'react'
import '../Auth/Auth.css'
const Auth = () => {
    const [isRegister, setIsRegister] = useState(false)
    const togglePanel = () => {
        setIsRegister(!isRegister)
    }
    return (
        <div className='flex justify-center h-screen items-center overflow-hidden'>
            <div className='box lg:max-w-4xl'>
                <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
                    <div className='front'>
                        <img src='https://www.google.com/imgres?q=computer%20programming&imgurl=https%3A%2F%2Fcdn.britannica.com%2F30%2F199930-131-B3D1D347%2Fcomputer
                        .jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Flist%2Finfluential-computer-programming-languages&docid=MvsvHch6-V4twM&tbnid=JIJ3NufefmnLAM&vet=12ahUKEwjV2ZPE7caHAxUm4QIHHY39AZEQM3oECHwQAA..i&w=900&h=675&hcb=2&ved=2ahUKEwjV2ZPE7caHAxUm4QIHHY39AZEQM3oECHwQAA' 
                        alt='' />
                    </div>
                    <div className='back'>
                    <img  src='https://www.google.com/imgres?q=login%20programming&imgurl=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftlr8oxjg%2Fproduction%2F9da8c0df54c8bc72a6c258bf7f880eb01e6426cb-1456x816
                    .png%3Fw%3D3840%26q%3D100%26fit%3Dclip%26auto%3Dformat&imgrefurl=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Fpasswordless-login-solutions-for-android--ud357&docid=WYoiy43M0fYmeM&tbnid=WhCNNL3nPqZVZM&vet=12ahUKEwiy29qB7saHAxU5zwIHHY_6GwMQM3oECHkQAA..i&w=3840&h=2152&hcb=2&ved=2ahUKEwiy29qB7saHAxU5zwIHHY_6GwMQM3oECHkQAA' 
                    alt=''/>
                    </div>
                </div>
                <div className='forms h-full'>
                    <div className='form-content h-full'>
                        <div className='login-form'>
login
                        </div>
                        <div className='signup-form'>
register
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Auth
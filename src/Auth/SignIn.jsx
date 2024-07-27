import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const SignIn = ({togglePanel}) => {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
    const handleSubmit=(e)=>{
        console.log('login')
    }
  return (
    <div>
        <h1 className='text-lg font-bold text-center pb-8'>Login</h1>
        <form  
        className='space-y-2'
        onSubmit={handleSubmit}>
        <TextField
        fullWidth
        label='Email'
        name='email'
        type='email'
        value={formData.email}
        onChange={handleSubmit}
        placeholder='enter your email...'/>
         <TextField
        fullWidth
        label='Password'
        name='password'
        type='password'
        value={formData.password}
        onChange={handleSubmit}
        placeholder='enter your Password...'/>
        <div className=''>
            <Button fullWidth className='customeButton ' 
            type='submit' >
                Login
            </Button>
        </div>
        </form>
        <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
            <span>don't have an account?</span>
            <Button>Signup</Button>
        </div>
    </div>
  )
}

export default SignIn
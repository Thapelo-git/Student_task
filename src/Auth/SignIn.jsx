import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const SignIn = () => {
    const [formData,setFormData]=useState({
        email:''
    })
    const handleSubmit=(e)=>{
        console.log('login')
    }
  return (
    <div>
        <h1 className='text-lg font-bold text-center pb-8'>Login</h1>
        <form onSubmit={handleSubmit}>
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
        <div>
            <Button fullWidth className='customeButton' 
            type='submit' sx={{padding:'9rem'}}>
                Login
            </Button>
        </div>
        </form>
    </div>
  )
}

export default SignIn
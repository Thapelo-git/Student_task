import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const SignUp = ({togglePanel}) => {
    const [formData,setFormData]=useState({
        title:'',
        FirstName:'',
        Surname:'',
        email:'',
        HighestQual:'',
        password:''
    })
    const handleSubmit=(e)=>{
        console.log('login')
    }
  return (
    <div>
        <h1 className='text-lg font-bold text-center pb-8'>Register</h1>
        <form  
        className='space-y-2'
        onSubmit={handleSubmit}>
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Title</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formData.title}
    label="Title"
    onChange={handleSubmit}
  >
    <MenuItem value='Mr'>Mr</MenuItem>
    <MenuItem value='Miss'>Ms</MenuItem>
    <MenuItem value='Mrs'>Thirty</MenuItem>
  </Select>
</FormControl>
<TextField
        fullWidth
        label='firstName'
        name='firstName'
        type='text'
        value={formData.FirstName}
        onChange={handleSubmit}
        placeholder='enter your FirstName...'/>
            <TextField
        fullWidth
        label='Surname'
        name='Surname'
        type='text'
        value={formData.text}
        onChange={handleSubmit}
        placeholder='enter your Surname...'/>
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
                Register
            </Button>
        </div>
        </form>
        <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
            <span>Already have an account?</span>
            <Button >Signin</Button>
        </div>
    </div>
  )
}

export default SignUp
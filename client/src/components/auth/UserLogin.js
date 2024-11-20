import React from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

const UserLogin = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password')
        }

        if (actualData.email && actualData.password) {
            try {
                const response = await axios.post('http://localhost:5000/api/login', actualData);
                document.getElementById('login-form').reset()
                setError({ status: true, msg: "Login Success", type: 'success' })
                navigate('/dashboard')
            } catch (error) {
                console.log("error", error);
                setError({ status: true, msg: "Invalid credentials", type: 'error' })
            }
        } else {
            setError({ status: true, msg: "All fields are required", type: 'error' }) 
        }
    }
    return (
        <>
            <Box component='form' novalidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
                <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
                <TextField margin='normal' required fullWidth id='password' name='password' label='password' type='password ' />
                <Box textAlign={"center"}>
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
                </Box>
                <NavLink to={'/SendPasswordResetEmail'}>Forgot password ?</NavLink>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
            </Box>
        </>
    )
}

export default UserLogin

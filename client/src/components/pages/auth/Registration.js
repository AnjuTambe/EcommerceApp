import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from "@mui/material";

const Registration = () => {
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
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            confirm_password: data.get('confirm_password'),
            tc: data.get('tc'),
        }

        if (actualData.name && actualData.email && actualData.password && actualData.tc != null) {
            if (actualData.password === actualData.confirm_password) {
                const response = await axios.post('http://localhost:5000/api/register', actualData);
                console.log(response.data);
                document.getElementById('registration-form').reset()
                setError({ status: true, msg: "Registration Successful", type: 'success' })
                navigate('/dashboard')
            } else {
                setError({ status: true, msg: "Password and Confirm Password  doesn't match", type: 'error' })
            }
        } else {
            setError({ status: true, msg: "All fields are required", type: 'error' })
        }
    }
    return (
        <>
            <Box component='form' novalidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
                <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
                <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
                <TextField margin='normal' required fullWidth id='password' name='password' label='password' type='password' />
                <TextField margin='normal' required fullWidth id='confirm_password' name='confirm_password' label='Confirm Password ' type='password' />
                <FormControlLabel control={< Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
                <Box textAlign={"center"}>
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Registered</Button>
                </Box>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
            </Box>
        </>
    )
}

export default Registration

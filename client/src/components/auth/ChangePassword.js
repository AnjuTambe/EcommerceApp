import React from 'react';
import { Box, TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
const ChangePassword = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData = {
            password: data.get('password'),
            confirm_password: data.get(' confirm password'),
        }

        if (actualData.password && actualData.confirm_password) {
            if (actualData.password === actualData.confirm_password) {
                console.log(actualData);
                document.getElementById('password-change-form').reset()
                setError({ status: true, msg: "Password Changed Successful", type: 'success' })
            } else {
                setError({ status: true, msg: "Password and Confirm Password  doesn't match", type: 'error' })
            }
        } else {
            setError({ status: true, msg: "All fields are required", type: 'error' })
        }
    };
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 600, mx: 4 }}>
                <h1>ChangePassword</h1>
                <Box component='form' onSubmit={handleSubmit} novalidate sx={{ mt: 1 }} id='password-change-form' >
                    <TextField margin='normal' required fullWidth id='password-change-form' name='password' label='New password' type='password ' />
                    <TextField margin='normal' required fullWidth id='confirm password' name='confirm password' label='Confirm New Password ' type='password ' />

                    <Box textAlign={"center"}>
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Registered</Button>
                    </Box>
                    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
                </Box>
            </Box>
        </>
    )
}

export default ChangePassword

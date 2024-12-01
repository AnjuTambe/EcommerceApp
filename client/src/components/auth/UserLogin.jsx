import React, { useState } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const UserLogin = ({ onLogin }) => {
    const navigate = useNavigate();
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: "",
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get("email"),
            password: data.get("password"),
        };

        if (actualData.email && actualData.password) {
            try{
            const response = await axios.post(
                "http://localhost:5000/api/login",
                actualData
            );
            console.log(response.data);
            console.log("Login Successful");
            document.getElementById("login-form").reset();
            setError({
                status: true,
                msg: "Login Successful!",
                type: "success",
            });
            onLogin(); // Call the parent function to update login state
            navigate("/dashboard");
        } catch(error){
            console.error("Login failed" , error.response?.data || error.message);
            setError({
                status: true,
                msg: error.response?.data?.message || "Login failed. Please try again.",
                type: "error",
            });
        }
    }
        
        else {
            setError({
                status: true,
                msg: "All fields are required",
                type: "error",
            });
        }
    };

    return (
        <Box component="form" id="login-form" onSubmit={handleSubmit}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
            />
            <Box textAlign="center">
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, px: 5 }}
                >
                    Login
                </Button>
            </Box>
            {error.status && <Alert severity={error.type}>{error.msg}</Alert>}
        </Box>
    );
};

export default UserLogin;

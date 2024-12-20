import React from "react";
import { TextField, Button, Box, Alert, Grid } from "@mui/material";
import { useState } from "react";
const SendPasswordResetEmail = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get("email"),
        };

        if (actualData.email) {
            console.log(actualData);
            document.getElementById("password-reset-email-form").reset();
            setError({
                status: true,
                msg: "Password Reset Email Sent. Check your Email !!",
                type: "success",
            });
        } else {
            setError({
                status: true,
                msg: "Please Provide ValidEmail",
                type: "error",
            });
        }
    };

    return (
        <>
            <Grid container justifyContent={"center"}>
                <Grid item sm={6} xs={12}>
                    <Box
                        component="form"
                        novalidate
                        sx={{ mt: 1 }}
                        id="password-reset-email-form"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            label="Email Address"
                        />
                        <Box textAlign={"center"}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, px: 5 }}
                            >
                                Send
                            </Button>
                        </Box>
                        {error.status ? (
                            <Alert severity={error.type}>{error.msg}</Alert>
                        ) : (
                            ""
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SendPasswordResetEmail;

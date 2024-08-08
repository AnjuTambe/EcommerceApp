import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";
const Dashboard = () => {
    const navigate = useNavigate()
    const handlelogout = () => {
        console.log("Logout clicked");
        navigate('/loginreg')
    }
    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
                    <h1>Dashboard</h1>
                    <Typography variant='h5'>Email : anjutambe987@gmail.com</Typography>
                    <Typography variant='h6'>Name : Anjali</Typography>
                    <Button variant="contained" color="warning" size="large" onClick={handlelogout} sx={{ mt: 8 }} >Logout</Button>
                </Grid>
                <Grid item sm={8}>
                    <ChangePassword />

                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard

import React from "react";

import { Grid,Typography, Tabs, Tab, Box } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";

import { useState } from "react";
import UserLogin from "./UserLogin";
import Registration from "./Registration";
import Pic1 from '../../../images/pic1.png';

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role="tabPanal" hidden={value !== index}>
            {
                value == index && (
                    <box>{children}</box>
                )
            }
        </div>
    )
}

const LoginReg = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        console.log("Value: ", newValue);
        setValue(newValue);
    }

    return (
        <>
            <Grid container sx={{ height: '90vh' }}>
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage: `url(${Pic1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: { xs: 'none', sm: 'block' }
                }}>
                </Grid>
                <Grid item lg={5} sm={7} xs={12}>
                    <card sx={{ width: '100%', height: '100%' }}>
                        <Box sx={{ mx: 3, height: 530 }}>
                            <Box sx={{ borderBottom: 1, borderBottomColor: 'divider' }}>
                                <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                                    <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                    <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }} ></Tab>
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <UserLogin /> 
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Registration /> 
                            </TabPanel>
                        </Box>
                        <Box textAlign="center" sx={{ mt: 2 }}>
                            <ShoppingBag sx={{ color: 'purple', fontSize: 100 }} />
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Sauranjali-Shop</Typography>
                        </Box>
                    </card>
                </Grid>
            </Grid>
        </>
    )
}

export default LoginReg
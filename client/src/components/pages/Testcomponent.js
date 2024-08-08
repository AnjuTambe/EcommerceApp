import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import { CssBaseline } from "@mui/material"
const Testcomponent = () => {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Testcomponent
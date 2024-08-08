import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Testcomponent from "./components/pages/Testcomponent";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Dashboard from "./components/pages/Dashboard";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Testcomponent />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="loginreg" element={<LoginReg />} />
                    <Route path="SendPasswordResetEmail" element={<SendPasswordResetEmail />} />
                    <Route path="ResetPassword" element={<ResetPassword />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<h1>Error 404 page not found!!</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;

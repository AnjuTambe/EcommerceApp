import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginReg from "./components/auth/LoginReg.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
import SendPasswordResetEmail from "./components/auth/SendPasswordResetEmail.jsx";
import Navbar from "./components/Navbar.jsx";
import ChangePassword from "./components/auth/ChangePassword.jsx";
import { Dashboard } from "./components/auth/Dashboard.jsx";
import Cart from "./components/auth/Cart.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem("IsLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggdIn");
        setIsLoggedIn(false);
    };

    const onLogin = () => {
        localStorage.setItem("IsLoggedIn", true);
    };

    const [cartItems , setCartItems] = useState([]);

    const addToCart = (iteam) => {
        setCartItems((prevItems) => [...prevItems , iteam]);
    };

    const removeFromCart = (iteamId) => {
        setCartItems((prevItems) => prevItems.filter((iteam) => iteamId !== iteamId));
    };

    return (
        <BrowserRouter>
            <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<LoginReg onLogin={onLogin} />}>
                    <Route index element={<LoginReg onLogin={onLogin} />} />
                    <Route path="loginreg" element={<LoginReg />} />
                    <Route
                        path="/send-password-reset-email"
                        element={<SendPasswordResetEmail />}
                    />
                    <Route
                        path="/reset-password/:resetToken"
                        element={<ResetPassword />}
                    />
                    <Route
                        path="/change-password"
                        element={<ChangePassword />}
                    />
                </Route>
                <Route
                    path="/dashboard"
                    element={<Dashboard isLoggedIn={isLoggedIn} addTocart={addToCart} />}
                />
                <Route path = "/cart" element={<Cart cartItems ={cartItems} removeFromCart={removeFromCart} />} />

                {/* Catch-all route for 404 page */}
                <Route path="*" element={<h1>Error 404: Page not found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

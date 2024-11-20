import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginReg from "./components/auth/LoginReg.js";
import ResetPassword from "./components/auth/ResetPassword.js";
import SendPasswordResetEmail from "./components/auth/SendPasswordResetEmail.js";
import Dashboard from "./components/pages/Dashboard";
import MensClothes from "./components/pages/MensClothes";
import ProductDetails from "./productDetails.js";
import NewCart from "./components/cart/NewCart.jsx";
import './index.css';

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginReg />}>
                        <Route index element={<LoginReg />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="loginreg" element={<LoginReg />} />
                        <Route path="SendPasswordResetEmail" element={<SendPasswordResetEmail />} />
                        <Route path="ResetPassword" element={<ResetPassword />} />
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/new-cart" element={<NewCart />} />
                    <Route path="/mens-clothes" element={<MensClothes />} />
                    
                    {/* Single route for Product Details with cardData prop */}
                    <Route path="/productDetails/:id" element={<ProductDetails products={cardData} />} />

                    {/* Catch-all route for 404 page */}
                    <Route path="*" element={<h1>Error 404: Page not found!</h1>} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;

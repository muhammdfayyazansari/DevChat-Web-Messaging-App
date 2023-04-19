import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";


const ChatRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route path="/" element={<OlxClone />} />
        <Route
          path="/productDetails/:productId"
          index
          element={<ProductDetails />}
        />
        <Route path="/myproducts/:uid" element={<MyProducts />} />
        <Route path="/updateproduct/:docref" element={<UpdateProduct />} />
        <Route path="/cart" element={<CartsProduct />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default ChatRouter;

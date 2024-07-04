"use client"; // This directive is necessary for client-side components in Next.js

import React, { useState } from "react";
import Login from "@/app/components/Login";
import Signup from "@/app/components/Signup";
import ForgetPassword from "@/app/components/ForgetPassword";

const HomeClient = () => {
  const [view, setView] = useState("login");

  const handleSignupClick = () => {
    setView("signup");
  };

  const handleLoginClick = () => {
    setView("login");
  };

  const handleForgetPasswordClick = () => {
    setView("forgetPassword");
  };

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {view === "login" && <Login onSignupClick={handleSignupClick} onForgetPasswordClick={handleForgetPasswordClick} />}
      {view === "signup" && <Signup onLoginClick={handleLoginClick} />}
      {view === "forgetPassword" && <ForgetPassword onLoginClick={handleLoginClick} />}
    </main>
  );
};

export default HomeClient;
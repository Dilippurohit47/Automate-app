"use client";
import { SignIn } from "@/components/auth/signIn";
import React, { useState } from "react";
import { SignUp } from "@/components/auth/signUp";
const Auth = () => {
  const [changeDialog, setChangeDialog] = useState("login");

  return (
    <div className="bg-home-gradient h-screen flex items-center justify-center">
      {changeDialog === "login" ? (
        <SignIn setChangeDialog={setChangeDialog} />
      ) : (
        <SignUp setChangeDialog={setChangeDialog} />
      )}
    </div>
  );
};

export default Auth;

"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const SignIn = dynamic(() => import("@/components/auth/signIn"));
const SignUp = dynamic(() => import("@/components/auth/signUp"));

const DIALOG_STATES = {
    LOGIN: "login",
    SIGNUP: "signup",
  };
  
  const Auth = () => {
    const [changeDialog, setChangeDialog] = useState<string>(DIALOG_STATES.LOGIN);

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

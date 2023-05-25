import React from "react";
import { LoginBanner } from "./LoginBanner/LoginBanner";
import { LoginForm } from "./LoginForm/LoginForm";

export function Login() {
  return (
    <div className="Login">
      <LoginBanner></LoginBanner>
      <LoginForm></LoginForm>
    </div>
  );
}

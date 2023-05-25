import React from "react";
import login_banner from "../../materials/login_banner.png";
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

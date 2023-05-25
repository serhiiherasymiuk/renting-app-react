import React from "react";
import { RegisterBanner } from "./RegisterBanner/RegisterBanner";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export function Register() {
  return (
    <div className="Register">
      <RegisterBanner></RegisterBanner>
      <RegisterForm></RegisterForm>
    </div>
  );
}

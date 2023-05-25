import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newAccount = {
      email: data.email,
      password: data.password,
    };
    console.log(newAccount);
  };

  return (
    <div className="LoginForm">
      <h1>Log In Please</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <i className="bi bi-envelope"></i>
          <input
            {...register("email", { required: true })}
            name="email"
            placeholder="Enter Your email address here"
            type="email"
          />
        </div>
        <div className="input-container">
          <i className="bi bi-key"></i>
          <input
            {...register("password", { required: true })}
            name="password"
            placeholder="Enter Your password here"
            type="password"
          />
        </div>
        <div className="checkbox-container">
          <div>
            <input type="checkbox" />
            <p>Remember Password?</p>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button type="submit">Log In</button>
      </form>
      <hr />
      <p>
        Don`t have an account?
        <Link to={"/register"}>
          <span> SIGN UP</span>
        </Link>
      </p>
    </div>
  );
}

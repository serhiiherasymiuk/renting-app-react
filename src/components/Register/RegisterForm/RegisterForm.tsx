import React from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newAccount = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(newAccount);
  };

  return (
    <div className="RegisterForm">
      <h1>Sign up Now</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <i className="bi bi-person"></i>
          <input
            {...register("name", { required: true })}
            name="name"
            placeholder="Full name here"
            type="text"
          />
        </div>
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
        <div className="input-container">
          <i className="bi bi-key"></i>
          <input placeholder="Confirm password" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <p>
        Already have an account?
        <Link to={"/login"}>
          <span> SIGN In</span>
        </Link>
      </p>
    </div>
  );
}

import React from "react";
import "./ReviewBanner.css";
import banner from "../../../materials/review_banner.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProperty } from "../../../store/reducers/property.reducer";

type FormData = {
  title: string;
  address: string;
  photo: string;
  text: string;
};

export function ReviewBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data, e) => {
    const newProperty = {
      title: data.title,
      address: data.address,
      photo: data.photo,
      text: data.text,
      date: new Date(),
      ratings: [],
    };
    dispatch(addProperty(newProperty));
    console.log(newProperty);
    e?.target.reset();
  };
  return (
    <div className="ReviewBanner">
      <div>
        <h1>Review a property that you've lived in</h1>
        <h4>(or still living in)</h4>
        <div className="button-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <i className="bi bi-bookmark"></i>
              <input
                {...register("title", { required: true })}
                name="title"
                placeholder="Enter Title"
                type="text"
              />
            </div>
            <div className="input-container">
              <i className="bi bi-house"></i>
              <input
                {...register("address", { required: true })}
                name="address"
                placeholder="Enter Address"
                type="text"
              />
            </div>
            <div className="input-container">
              <i className="bi bi-image"></i>
              <input
                {...register("photo", { required: true })}
                name="photo"
                placeholder="Enter Photo Url"
                type="url"
              />
            </div>
            <div className="input-container">
              <i className="bi bi-pen"></i>
              <input
                {...register("text", { required: true })}
                name="text"
                placeholder="Enter Text"
                type="text"
              />
            </div>
            <button type="submit">Create Review</button>
          </form>
        </div>
      </div>
      <img src={banner} alt="" />
    </div>
  );
}

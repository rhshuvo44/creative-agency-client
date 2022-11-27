import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="contact bg-accent p-20 md:flex ">
      <div className="contact-info md:w-1/2">
        <h2 className="text-4xl text-[#2D2D2D] px-0 md:px-10">
          Let us handle your project, professionally.
        </h2>
        <p className="px-0 md:px-10  text-[14px] my-10">
          With well written codes, we build amazing apps for all platforms,
          mobile and web apps in general.
        </p>
      </div>
      <div className="contact-form md:w-1/2 px-0 md:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Your email address"
            className="input w-full"
            {...register("email", { required: true })}
          />
          <input
            type="text"
            placeholder="Your name / company’s name"
            className="input w-full my-5"
            {...register("name", { required: true })}
          />
          <textarea
            className="textarea w-full h-[277px]"
            placeholder="Your message"
            {...register("message", { required: true })}
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="dark-btn mb-20 md:mb-0"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;

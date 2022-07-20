import React, { useState } from "react";
import { useForm } from "react-hook-form";
import sendEmail, { FormInputs } from "../../../utils/sendEmail";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [count, setCount] = useState(30);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    sendEmail(data);
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 30000);
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label>{`Name `}</label>
      {errors.name && <label className="error">({errors.name?.message})</label>}
      <input className="name" {...register("name", { required: "This field is required" })} maxLength={64} />
      <label>{`Email `}</label>
      {errors.email && <label className="error">({errors.email?.message})</label>}
      <input
        className="email"
        {...register("email", {
          required: "This field is required",
          pattern: { value: /^(.+)@(.+)$/i, message: "Please enter a valid email" },
        })}
        maxLength={64}
      />
      <label>{`Message `}</label>
      {errors.message && <label className="error">({errors.message?.message})</label>}
      <textarea
        {...register("message", {
          required: "This field is required",
        })}
      />
      <input type="submit" value={sent ? "Sent" : "Send"} disabled={sent} />
      {sent && <span>{`Wait ${count} seconds to send another message`}</span>}
    </form>
  );
}

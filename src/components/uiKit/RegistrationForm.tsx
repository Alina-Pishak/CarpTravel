"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import clsx from "clsx";

import CustomCheckbox from "./CustomCheckbox";

type FormData = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message?: string;
};

type Props = {
  registrationFormProps: {
    props: { label: string; placeholder: string; name: string }[];
    confirmText: string;
    buttonText: string;
  };
};

const schema = yup.object({
  fullName: yup.string().min(3).max(100).required(),
  email: yup.string().email().required(),
  position: yup.string().min(3).max(100).required(),
  phone: yup
    .string()
    .matches(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm)
    .required(),
  message: yup.string().min(3).max(300),
});

export default function RegistrationForm({ registrationFormProps }: Props) {
  const { props, confirmText, buttonText } = registrationFormProps;
  const [checked, setChecked] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.map(({ label, placeholder, name }, index) => (
        <React.Fragment key={index}>
          <label
            htmlFor={name}
            className={clsx(
              "text-xs leading-[2] tracking-[0.2em] font-extralight mb-1 block ",
              errors[name] && "text-error"
            )}
          >
            {label}
          </label>
          {name !== "message" ? (
            <input
              id={name}
              placeholder={placeholder}
              autoComplete={false}
              {...register(name)}
              className={clsx(
                " font-extralight text-[13px] leading-[1.8] px-2 w-full bg-bgInputs placeholder:opacity-20  hover:bg-bgHoverInputs focus:bgHoverInputs",
                name === "message" && "h-[196px]",
                errors[name] && "text-error opacity-100"
              )}
            />
          ) : (
            <textarea
              id={name}
              {...register(name)}
              className=" font-extralight text-[13px] leading-[1.8] px-2 w-full bg-bgInputs placeholder:opacity-20 h-[196px] hover:bg-bgHoverInputs focus:bgHoverInputs"
            />
          )}

          <div className="flex gap-1 justify-end items-center h-6 ">
            {errors[name] && (
              <>
                <svg width={18} height={18} className="stroke-error">
                  <use href="/img/symbol-defs.svg#icon-cross"></use>
                </svg>
                <p className="font-extralight text-xs leading-[2] tracking-[0.2em] text-error">
                  Incorrect {name}
                </p>
              </>
            )}
          </div>
        </React.Fragment>
      ))}
      <div className="flex gap-2 relative mb-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => console.log(e)}
          className=" opacity-0 h-6 w-6 cursor-pointer "
        />
        <CustomCheckbox checked={checked} setChecked={setChecked} />
        <p className="font-extralight text-xs leading-[1.8]">{confirmText}</p>
      </div>
      <button
        type="submit"
        className="bg-none font-medium text-3xl text-inherit uppercase block ml-auto"
      >
        {buttonText}
      </button>
    </form>
  );
}
// font-family: var(--font-family);
// font-weight: 200;
// font-size: 12px;
// line-height: 183%;
// color: #fff;

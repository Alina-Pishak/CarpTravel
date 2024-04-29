"use client";

import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";

import CustomCheckbox from "../CustomCheckbox";

import "./Form.css";

type Props = {
  formProps: {
    props: { label: string; placeholder: string; name: string }[];
    confirmText?: string;
    buttonText: string;
  };
  schema: yup.AnyObjectSchema;
};

export default function Form({ formProps, schema }: Props) {
  const { props, buttonText } = formProps;
  const [checked, setChecked] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: typeof schema) => {
    if (!formProps.confirmText) {
      toast.success("Your data sent successfully");
      localStorage.setItem("contacts", JSON.stringify(data));
      reset();
    } else if (formProps.confirmText && checked) {
      toast.success("Your data sent successfully");
      localStorage.setItem("career", JSON.stringify(data));
      reset();
    } else if (formProps.confirmText && !checked) {
      toast.error("You need to allow us processing your data");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "form-layout gap-x-5	items-start	",
        !formProps.confirmText && "form-layout-simple"
      )}
    >
      {props.map(({ label, placeholder, name }, index) => (
        <div key={index} className={`form-${name}`}>
          <label
            htmlFor={name}
            className={clsx(
              "text-xs leading-loose tracking-2 font-extralight mb-1 block ",
              errors[name] && "text-error"
            )}
          >
            {label}
          </label>

          {name !== "message" ? (
            <input
              id={name}
              placeholder={placeholder}
              autoComplete="off"
              {...register(name)}
              className={clsx(
                " font-extralight text-[13px] leading-[1.85] px-2 w-full bg-bgInputs placeholder:opacity-20 transition-colors hover:bg-bgHoverInputs focus:bg-bgHoverInputs xl:text-xl xl:leading-[1.2]",

                errors[name] && "text-error opacity-100"
              )}
            />
          ) : (
            <textarea
              id={name}
              {...register(name)}
              className=" font-extralight text-[13px] leading-[1.8] px-2 w-full bg-bgInputs resize-none	mb-4 placeholder:opacity-20 h-[196px] transition-colors hover:bg-bgHoverInputs focus:bg-bgHoverInputs md:h-[228px] xl:text-xl xl:leading-[1.2] xl:h-[268px]"
            />
          )}
          {name !== "message" && (
            <div className="flex gap-1 justify-end items-center h-6 ">
              {errors[name] && (
                <>
                  <svg width={18} height={18} className="stroke-error">
                    <use href="/img/symbol-defs.svg#icon-cross"></use>
                  </svg>
                  <p className="font-extralight text-xs leading-loose tracking-2 text-error">
                    Incorrect {name}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      ))}
      {formProps.confirmText && (
        <div className="flex gap-2 relative mb-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => console.log(e)}
            className=" opacity-0 h-6 w-6 cursor-pointer "
          />
          <CustomCheckbox checked={checked} setChecked={setChecked} />
          <p className="font-extralight text-xs leading-[1.8]">
            {formProps.confirmText}
          </p>
        </div>
      )}
      <button
        type="submit"
        className="bg-none font-medium text-3xl text-inherit uppercase block ml-auto form-button"
      >
        {buttonText}
      </button>
      <Toaster />
    </form>
  );
}

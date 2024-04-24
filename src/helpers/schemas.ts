import * as yup from "yup";

export const contactSchema = yup.object({
  fullName: yup.string().min(3).max(100).required(),
  email: yup.string().email().required(),
  message: yup.string().min(0).max(300),
});

export const registrationSchema = yup.object({
  fullName: yup.string().min(3).max(100).required(),
  email: yup.string().email().required(),
  position: yup.string().min(3).max(100).required(),
  phone: yup
    .string()
    .matches(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm)
    .required(),
  message: yup.string().min(0).max(300),
});
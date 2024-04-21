// import { useForm, SubmitHandler } from "react-hook-form";

// interface IFormInput {
//   fullName: string;
//   email: string;
//   position: number;
//   phone: string;
//   message:string;
// }

// export default function RegistrationForm() {
//   const { register, handleSubmit } = useForm<IFormInput>();
//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("fullName", { required: true, maxLength: 20 })} />
//       <input {...register("email", { pattern: /^[A-Za-z]+$/i })} />
//       <input type="number" {...register("position", { min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   );
// }

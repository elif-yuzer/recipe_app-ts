import { z } from "zod";

export const authSchema = z.object({
 /* identifier benım belırledıgım key  */
identifier:z.string().refine(
    (value)=>{
        const isEmail=z.email().safeParse(value).success
        const isUsername = value.length >= 3 && value.length <= 20
      return isEmail || isUsername
    },
{ message: "Geçerli bir email veya kullanıcı adı girin" }

) ,



  password: z
    .string()
    .min(1, "Required")
    .min(8, "Password must be at least 8 characters")
    .regex(/\d+/, "Must contain a digit")
    .regex(/[a-z]/, "Must contain a lowercase letter")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[@$?!%&*]+/, "Must contain a special character (@$?!%&*)"),
});



export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters"),

    lastName: z
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters"),

    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Invalid email address"),

    username: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters"),

    password: z
      .string()
      .min(1, "Required")
      .min(8, "Password must be at least 8 characters")
      .regex(/\d+/, "Must contain a digit")
      .regex(/[a-z]/, "Must contain a lowercase letter")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[@$?!%&*]+/, "Must contain a special character (@$?!%&*)"),

    confirmPassword: z.string().min(1, "Confirm password is required"),
  })


  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });


import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Link } from "react-router-dom";
import { authSchema } from "../../lib/authSchema";
import type z from "zod";
import type { SignInFormProps } from "../../types/type";

export default function SignInForm({ setIsOpen }: SignInFormProps) {
  /* destructring işlemi yapıyorm usefrom hookundan */
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  async function onSubmit(data: z.infer<typeof authSchema>) {
    console.log(data);
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 bg-background">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight font-header text-brand">
            Sign in
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm/6 font-medium text-brand"
              >
                username or email
              </label>
              <div className="mt-2">
                <input
                  {...register("identifier")}
                  aria-invalid={errors.identifier ? "true" : "false"}
                  id="username"
                  type="text"
                  placeholder="Enter your email or username"
                  className="block w-full rounded-md border border-[#D8D1C7] bg-[#FCFAF7] px-3 py-2 text-base text-[#2B2B2B] outline-none placeholder:text-[#9C948A] focus:border-brand sm:text-sm/6"
                />
                {errors.identifier && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.identifier.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-brand"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-brand hover:text-[#55635A]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register("password")}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border border-[#D8D1C7] bg-[#FCFAF7] px-3 py-2 text-base text-[#2B2B2B] outline-none placeholder:text-[#9C948A] focus:border-brand sm:text-sm/6"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-brand px-3 py-2 text-sm font-semibold text-[#F8F5F0] hover:bg-[#3C4A41]"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-[#7A746C]">
            {" "}
            <Link
              to="/sign-up"
              className="font-medium text-brand hover:text-[#55635A]"
            >
              if you don't have any account,you can Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

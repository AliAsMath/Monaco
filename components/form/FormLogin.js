import FormInput from "./FormInput";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useRef } from "react";
import { signIn } from "next-auth/react";

const FormLogin = () => {
  const router = useRouter();

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value();
    const password = passwordRef.current.value();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(result);

    router.replace("/profile");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-6 px-8 py-5 rounded-lg shadow-2xl font-Yekan justify-evenly shadow-monako-1 bg-monako-white "
    >
      <FormInput ref={emailRef} name="email" type="email" placeholder="ایمیل" />
      <FormInput
        ref={passwordRef}
        name="password"
        type="password"
        placeholder="رمز عبور"
      />
      <button
        type="submit"
        className="py-2 mx-3 bg-blue-700 rounded hover:bg-blue-600 text-monako-white"
      >
        ورود
      </button>

      <button
        className="py-2 mx-3 border-[1px] border-blue-700 rounded hover:bg-blue-50 text-blue-700"
        onClick={() => router.push("/auth/forget")}
      >
        رمز عبور را فراموش کرده‌ام
      </button>
    </form>
  );
};

export default FormLogin;

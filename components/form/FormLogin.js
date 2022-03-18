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
      className="flex flex-col gap-6 px-8 py-5 rounded-lg shadow-2xl justify-evenly shadow-monako-1 bg-monako-white "
    >
      <FormInput ref={emailRef} name="email" type="email" placeholder="ایمیل" />
      <FormInput
        ref={passwordRef}
        name="password"
        type="password"
        placeholder="رمز عبور"
      />
      <Button type="submit" variant="contained" className="mx-3 bg-blue-700">
        ورود
      </Button>

      <Button
        variant="outlined"
        className="mx-3 "
        onClick={() => router.push("/auth/forget")}
      >
        رمز عبور را فراموش کرده‌ام
      </Button>
    </form>
  );
};

export default FormLogin;

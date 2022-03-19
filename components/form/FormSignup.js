import FormInput from "./FormInput";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const createUser = async ({ email, password }) => {
  const response = await fetch("/api/user/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "somthing went wrong!");
  }
  return data;
};

const FormSignup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value();
    const password = passwordRef.current.value();
    const repassword = repasswordRef.current.value();

    try {
      const result = await createUser({ email, password });
      console.log(result);
    } catch (err) {
      console.log(err);
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

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
      <FormInput
        ref={repasswordRef}
        name="re-password"
        type="password"
        placeholder="تکرار رمز عبور"
      />
      <button
        type="submit"
        className="py-2 mx-3 bg-blue-700 rounded hover:bg-blue-600 text-monako-white"
      >
        ورود
      </button>
    </form>
  );
};

export default FormSignup;

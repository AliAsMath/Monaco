import FormInput from "./FormInput";
import { Button } from "@mui/material";
import { useRef } from "react";

const reqToChangePass = async ({ repassword, password }) => {
  const response = await fetch("/api/user/change-password", {
    method: "PATCH",
    body: JSON.stringify({ password, repassword }),
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

const FormChangePassword = () => {
  const passwordRef = useRef();
  const repasswordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const password = passwordRef.current.value();
    const repassword = repasswordRef.current.value();

    try {
      const result = await reqToChangePass({ password, repassword });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-monako-white">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-6 px-8 py-5 rounded-lg shadow-2xl justify-evenly shadow-monako-1 bg-monako-white "
      >
        <FormInput
          ref={passwordRef}
          name="password"
          type="password"
          placeholder="رمز عبور"
        />
        <FormInput
          ref={repasswordRef}
          name="repassword"
          type="password"
          placeholder="تکرار رمز عبور"
        />
        <button
          type="submit"
          className="py-2 mx-3 bg-blue-700 rounded hover:bg-blue-600 text-monako-white"
        >
          تغییر
        </button>
      </form>
    </div>
  );
};

export default FormChangePassword;

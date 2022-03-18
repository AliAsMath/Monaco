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
    <div className="flex justify-center items-center h-screen">
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
        <Button type="submit" variant="contained" className="mx-3 bg-blue-700">
          تغییر
        </Button>
      </form>
    </div>
  );
};

export default FormChangePassword;

import FormInput from "./FormInput";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    toast.promise(async () => await reqToChangePass({ password, repassword }), {
      pending: "در حال بررسی",
      success: "رمز عبور با موفقیت تغییر کرد",
      error: "خطا در تغییر رمز عبور. لطفا رمز عبور را صحیح وارد کنید",
    });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-monako-white">
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
      <ToastContainer
        className="text-xs translate-y-16 sm:text-base sm:translate-y-10 h-fit w-fit font-Yekan"
        position="top-right"
        hideProgressBar={false}
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default FormChangePassword;

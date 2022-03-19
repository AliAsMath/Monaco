import FormInput from "./FormInput";
import { useRouter } from "next/router";
import { useRef } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormLogin = () => {
  const router = useRouter();

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value();
    const password = passwordRef.current.value();

    const singin = async () => {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) throw new Error({ message: result.error });
      router.replace("/profile");
    };

    toast.promise(singin, {
      pending: "در حال بررسی",
      error: "ورود ناموفق",
    });
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-6 px-8 py-5 rounded-lg shadow-2xl font-Yekan justify-evenly shadow-monako-1 bg-monako-white "
      >
        <FormInput
          ref={emailRef}
          name="email"
          type="email"
          placeholder="ایمیل"
        />
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
    </>
  );
};

export default FormLogin;

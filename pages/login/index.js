import { useState } from "react";
import Form from "../../components/auth/Form";

const Login = () => {
  const [inputType, setInputType] = useState("login");

  return (
    <section className="flex flex-col items-center justify-center h-screen text-sm font-Yekan text-stone-500 bg-monako-white">
      <div className="flex gap-3 mb-3 text-lg text-monako-2">
        <h3
          className={
            "cursor-pointer hover:text-monako-3 " +
            (inputType === "signup" && "text-monako-5")
          }
          onClick={() => setInputType("signup")}
        >
          ثبت نام
        </h3>
        /
        <h3
          className={
            "cursor-pointer hover:text-monako-3 " +
            (inputType === "login" && "text-monako-5 ")
          }
          onClick={() => setInputType("login")}
        >
          ورود
        </h3>
      </div>
      <div className="sm:w-1/3 w-5/6 ">
        <Form inputType={inputType} setInputType={setInputType} />
      </div>
    </section>
  );
};

export default Login;

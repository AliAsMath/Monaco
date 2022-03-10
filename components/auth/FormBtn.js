const FormBtn = ({ inputType }) => {
  return (
    <button
      className="px-4 py-2 ml-3 transition-all bg-blue-700 rounded text-monako-white hover:bg-blue-500 "
      type="submit"
    >
      {inputType === "login" && "ورود"}
      {inputType === "signup" && "ثبت نام"}
      {inputType === "forgotten" && "ارسال ایمیل"}
    </button>
  );
};

export default FormBtn;

import FormSignup from "./FormSignup";
import FormForget from "./FormForget";
import FormBtn from "./FormBtn";
import FormLogin from "./FormLogin";

const Form = ({ inputType, setInputType }) => {
  const submitHanler = (e) => {
    e.preventDefault();
    console.log(`submit ${inputType}`);
  };

  return (
    <form
      className="flex flex-col justify-between px-8 py-5 rounded-lg shadow-2xl shadow-monako-1 bg-monako-white "
      onSubmit={submitHanler}
    >
      <div className="flex flex-col">
        {inputType === "login" && <FormLogin />}
        {inputType === "signup" && <FormSignup />}
        {inputType === "forgotten" && <FormForget />}
      </div>
      <div className="flex items-center justify-between my-4">
        <FormBtn inputType={inputType} />
        {inputType === "login" && (
          <a
            className="mr-3 transition-all text-cyan-400 font hover:text-monako-3"
            href="#"
            onClick={() => setInputType("forgotten")}
          >
            رمز عبور را فراموش کردید؟
          </a>
        )}
      </div>
    </form>
  );
};

export default Form;
import FormInput from "./FormInput";

const FormForget = () => {
  return (
    <form className="flex flex-col gap-6 px-8 py-5 rounded-lg shadow-2xl justify-evenly shadow-monako-1 bg-monako-white ">
      <FormInput name="email" type="email" placeholder="ایمیل" />
      <button
        type="submit"
        className="py-2 mx-3 bg-blue-700 rounded hover:bg-blue-600 text-monako-white"
      >
        ارسال
      </button>
    </form>
  );
};

export default FormForget;

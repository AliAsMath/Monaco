import FormInput from "./FormInput";

const FormSignup = ({ isLogForm }) => {
  return (
    <>
      <FormInput name="username" type="text" placeholder="نام کاربری" />
      <FormInput name="email" type="email" placeholder="ایمیل" />
      <FormInput name="password" type="password" placeholder="رمز عبور" />
      <FormInput
        name="re-password"
        type="password"
        placeholder="تکرار رمز عبور"
      />
    </>
  );
};

export default FormSignup;

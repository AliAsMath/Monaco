import FormInput from "./FormInput";

const FormLogin = () => {
  return (
    <>
      <FormInput name="username" type="text" placeholder="نام کاربری" />
      <FormInput name="password" type="password" placeholder="رمز عبور" />
    </>
  );
};

export default FormLogin;

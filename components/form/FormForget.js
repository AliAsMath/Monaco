import FormInput from "./FormInput";
import { Button } from "@mui/material";

const FormForget = () => {
  return (
    <form className="flex gap-6 flex-col justify-evenly  px-8 py-5 rounded-lg shadow-2xl shadow-monako-1 bg-monako-white ">
      <FormInput name="email" type="email" placeholder="ایمیل" />
      <Button variant="contained" className="bg-blue-700 mx-3">
        ارسال
      </Button>
    </form>
  );
};

export default FormForget;

const FormInput = (props) => {
  return (
    <input
      className="px-3 py-1 mx-3 transition-all border-2 border-transparent rounded shadow text-monako-1 shadow-monako-1 focus:border-b-2 focus:border-blue-500 focus:outline-none h-12 focus:shadow-outline"
      {...props}
    />
  );
};

export default FormInput;

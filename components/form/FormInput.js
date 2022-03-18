import react, { useRef, useImperativeHandle } from "react";

const FormInput = react.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      value: () => inputRef.current.value,
    };
  });

  return (
    <input
      ref={inputRef}
      dir="rtl"
      className="px-3 py-1 mx-3 transition-all border-2 border-transparent rounded shadow text-monako-1 shadow-monako-1 focus:border-b-2 focus:border-blue-500 focus:outline-none  focus:shadow-outline"
      {...props}
    />
  );
});

export default FormInput;

import React from "react";

const Input = ({
  type,
  name,
  className,
  label,
  onChange,
  required = false,
  colors,
}: {
  type?: string;
  name?: string;
  className?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  colors?: string;
}) => {
  const bgColor = () => {
    if (colors === "dark") {
      return "bg-darkest text-white";
    } else {
      return "bg-white text-black";
    }
  };
  return (
    <div className="relative z-0 w-full mt-3 group">
      <input
        type={type}
        name={name}
        id={name}
        className={`block py-5 px-5 w-full rounded-[60px] text-lg ${bgColor()} border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-1 focus:border-blue-600 peer ${className}`}
        placeholder=""
        onChange={onChange}
        required={required}
      />
      <label
        htmlFor={name}
        className="w-fit px-1 mx-6 mt-4 peer-focus:font-medium absolute l2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

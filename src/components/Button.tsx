import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-primary text-white py-1 md:py-2 px-8 md:px-16 rounded-[40px]"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

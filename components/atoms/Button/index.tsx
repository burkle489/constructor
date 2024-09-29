"use client";

import { ButtonHTMLAttributes, FC } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="border-2 border-grey-dark bg-carmine-red px-4 py-2.5 text-lg font-bold uppercase text-white duration-300 hover:border-grey-dark hover:bg-opacity-70 hover:text-grey-dark hover:shadow-grey-dark"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

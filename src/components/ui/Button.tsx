// import clsx from "clsx";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps<T> extends ButtonHTMLAttributes<T> {
  children: ReactNode;
}

function Button(props: ButtonProps<any>) {
  const { children, className, ...others } = props;
  return (
    <button
      className={clsx(
        "p-3 mr-2 font-semibold rounded-full h-fit py-[4px] hover:scale-105 active:scale-95 transition-all duration-300 disabled:scale-100 disabled:opacity-40 whitespace-nowrap",
        className
      )}
      {...others}
    >
      {children}
    </button>
  );
}

export default Button;

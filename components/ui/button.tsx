import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

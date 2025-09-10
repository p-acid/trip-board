import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="text-foreground mb-1 block text-sm font-medium"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={`border-border text-foreground focus:border-brand-500 w-full border-0 border-b-2 bg-transparent px-0 py-2 transition-colors duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-0 ${
            error ? "border-destructive" : ""
          } ${className || ""}`}
          {...props}
        />
        {error && <p className="text-destructive mt-1 text-sm">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

import React from "react";
import Input from "../../templates/Input";

type GenericInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  title: string;
};

function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
  );
}

const GenericInput = React.forwardRef<HTMLInputElement, GenericInputProps>(
  ({ className = "", title, ...props }, ref) => (
    <Input
      ref={ref}
      id={title}
      type="text"
      autoComplete={title}
      placeholder={toTitleCase(title)}
      className={className}
      {...props}
    />
  )
);

GenericInput.displayName = "GenericInput";
export default GenericInput;
import React from "react";
import Input from "../../templates/Input";

type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isUsername?: boolean;
};

const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
  ({ className = "", isUsername = false, ...props }, ref) => (
    <Input
      ref={ref}
      type="email"
      autoComplete={isUsername ? "username" : "email"}
      placeholder="Email"
      className={className}
      {...props}
    />
  )
);

EmailInput.displayName = "EmailInput";
export default EmailInput;

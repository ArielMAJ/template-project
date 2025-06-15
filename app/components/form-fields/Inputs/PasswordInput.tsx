import React from "react";
import Input from "../../templates/Input";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isNewPassword?: boolean;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className = "", isNewPassword = true, ...props }, ref) => (
    <Input
      ref={ref}
      type="password"
      autoComplete={isNewPassword ? "new-password" : "current-password"}
      placeholder="Password"
      className={className}
      {...props}
    />
  )
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;

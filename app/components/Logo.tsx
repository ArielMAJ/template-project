import React from "react";
import logoDark from "~/assets/logo-dark.svg";
import logoLight from "~/assets/logo-light.svg";

const Logo: React.FC = () => (
  <>
    <img src={logoLight} alt="Logo" className="block w-full dark:hidden" />
    <img src={logoDark} alt="Logo" className="hidden w-full dark:block" />
  </>
);

export default Logo;

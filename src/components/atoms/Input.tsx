import React, { FC } from "react";

interface Props {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
}

const Input: FC<Props> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className="input" />;
};

export default Input;

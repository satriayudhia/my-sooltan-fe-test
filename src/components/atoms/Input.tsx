import React, { FC } from "react";

interface Props {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

const Input: FC<Props> = ({ type, placeholder, value, onChange, onSubmit }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      onSubmit={onSubmit}
    />
  );
};

export default Input;

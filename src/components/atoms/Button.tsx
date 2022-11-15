import React, { FC } from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button className="main-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import s from "./Button.module.css";

const Button = ({
  // Дефолтные значения кнопки, если не получает других пропов извне
  label = "",
  onClick = () => null,
  type = "button",
  customClassName = ""
}) => (
  <button
    className={
      customClassName === "" ? s.button : `${s.button} ${customClassName}`
    }
    type={type}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;

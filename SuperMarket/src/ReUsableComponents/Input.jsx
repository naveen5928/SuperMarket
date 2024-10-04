/* eslint-disable react/prop-types */
import React from "react";
import clsx from "clsx";
export default function Input(props) {
  const {
    children,
    className,
    type = "text",
    placeholder,
    required,
    ...rest
  } = props;
  const classNames = clsx(
    {
      input: true,
    },
    className
  );
  return (
    <div>
      <input
        className={classNames}
        placeholder={placeholder}
        required={required}
        type={type}
        {...rest}
      />
    </div>
  );
}

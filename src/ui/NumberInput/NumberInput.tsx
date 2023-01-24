import "./NumberInput.css";
import React from 'react';

export const NumberInput = ({
  onChange, value
}: {
  onChange: (value: string) => void,
  value: number
}) => {
  return (
    <input
      className="NumberInput"
      type={"number"}
      min={1}
      defaultValue={10}
      value={value ?? 10}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

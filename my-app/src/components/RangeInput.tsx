import React from 'react';
import { InputValue } from "../consts/index";

interface Props extends InputValue {
  setValue: React.Dispatch<number>;
  value: number
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const RangeInput: React.FC<Props> = ({ name, staticValues, value, unit, setValue }) => {
  const handleChange = (e: InputEvent) => {
    setValue(parseInt(e.target.value));
  };
  return (
    <>
      <label>
        {name}: {value}
        {unit};
      </label>
      <input
        type="range"
        min={staticValues.min}
        max={staticValues.max}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default RangeInput;

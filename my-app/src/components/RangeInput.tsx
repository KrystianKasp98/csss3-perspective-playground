import React from 'react';
import { InputValue } from '../consts/index';

function RangeInput({name, value, unit}:InputValue) {
  return (
    <>
      <label>{name}: {value.current}{unit}</label>
      <input type="range" />
    </>
  )
}

export default RangeInput;

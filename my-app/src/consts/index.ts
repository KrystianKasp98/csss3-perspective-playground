export type InputValue = {
  name: string,
  value: Value,
  unit: string
}

type Value = {
  min: string,
  max: string,
  current: number
}

export const defaultInputsValue: InputValue[] = [
  {
    name: "perspective",
    value: {
      min: "0",
      max: "999",
      current: 0,
    },
    unit: "px",
  },
  {
    name: "rotateX",
    value: {
      min: "-180",
      max: "180",
      current: 0,
    },
    unit: "deg",
  },
  {
    name: "rotateY",
    value: {
      min: "-180",
      max: "180",
      current: 0,
    },
    unit: "deg",
  },
  {
    name: "rotateZ",
    value: {
      min: "-180",
      max: "180",
      current: 0,
    },
    unit: "deg",
  },
];

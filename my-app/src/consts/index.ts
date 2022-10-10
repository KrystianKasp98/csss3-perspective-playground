export type InputValue = {
  name: string,
  staticValues: StaticValues,
  unit: string
}

type StaticValues = {
  min: string,
  max: string,
}

export const defaultInputsValue: InputValue[] = [
  {
    name: "perspective",
    staticValues: {
      min: "0",
      max: "999",
    },
    unit: "px",
  },
  {
    name: "rotateX",
    staticValues: {
      min: "-180",
      max: "180",
    },
    unit: "deg",
  },
  {
    name: "rotateY",
    staticValues: {
      min: "-180",
      max: "180",
    },
    unit: "deg",
  },
  {
    name: "rotateZ",
    staticValues: {
      min: "-180",
      max: "180",
    },
    unit: "deg",
  },
];

import React, { useState } from "react";
import { defaultInputsValue, InputValue } from "../src/consts/index";
import RangeInput from "./components/RangeInput";

const App:React.FC = () => {
  const [perspective, setPerspective] = useState<number>(0);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [rotateZ, setRotateZ] = useState<number>(0);


  return (
    <div className="App">
      <h2>CSS3 Perspective Playground</h2>
      <main>
        <section className="settings">
          <div className="settings-container">
            <RangeInput
              value={perspective}
              setValue={setPerspective}
              name={defaultInputsValue[0].name}
              staticValues={defaultInputsValue[0].staticValues}
              unit={defaultInputsValue[0].unit}
            />

            <RangeInput
              value={rotateX}
              setValue={setRotateX}
              name={defaultInputsValue[1].name}
              staticValues={defaultInputsValue[1].staticValues}
              unit={defaultInputsValue[1].unit}
            />

            <RangeInput
              value={rotateY}
              setValue={setRotateY}
              name={defaultInputsValue[2].name}
              staticValues={defaultInputsValue[2].staticValues}
              unit={defaultInputsValue[2].unit}
            />

            <RangeInput
              value={rotateZ}
              setValue={setRotateZ}
              name={defaultInputsValue[3].name}
              staticValues={defaultInputsValue[3].staticValues}
              unit={defaultInputsValue[3].unit}
            />

            <button type="button">Reset</button>
            <button type="button">Copy</button>
          </div>
        </section>
        <section className="output">
          <div className="box-container">
            <div className="box"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

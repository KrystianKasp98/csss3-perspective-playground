import React, { useState } from "react";
import _ from "lodash"; // if some problems with reset values use lodash to deep cloning defaultInputsValue instead just getting reference
import { defaultInputsValue, InputValue } from "../src/consts/index";
import RangeInput from "./components/RangeInput";

function App() {
  const [perspective, setPerspective] = useState<InputValue>(
    defaultInputsValue[0]
  );
  const [rotateX, setRotateX] = useState<InputValue>(defaultInputsValue[1]);
  const [rotateY, setRotateY] = useState<InputValue>(defaultInputsValue[2]);
  const [rotateZ, setRotateZ] = useState<InputValue>(defaultInputsValue[3]);

  return (
    <div className="App">
      <h2>CSS3 Perspective Playground</h2>
      <main>
        <section className="settings">
          <div className="settings-container">
            <RangeInput
              name={perspective.name}
              value={perspective.value}
              unit={perspective.unit}
            />
            {/* <label>perspective: 0px;</label>
            <input type="range" min="0" max="999" /> */}

            <label>rotateX: 0deg; </label>
            <input type="range" min="-180" max="180" />

            <label>rotateY: 0deg; </label>
            <input type="range" min="-180" max="180" />

            <label>rotateZ: 0deg; </label>
            <input type="range" min="-180" max="180" />
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

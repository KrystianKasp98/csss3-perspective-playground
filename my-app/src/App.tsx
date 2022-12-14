import React, { useState,useEffect } from "react";
import { defaultInputsValue} from "../src/consts/index";
import RangeInput from "./components/RangeInput";

type BoxStyle = {
  transform: string,
};

const App:React.FC = () => {
  const [perspective, setPerspective] = useState<number>(150);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [rotateZ, setRotateZ] = useState<number>(0);
  const [boxStyle, setBoxStyle] = useState<BoxStyle>({transform: "",});

  useEffect(() => {
    setBoxStyle({
      transform: `
      perspective(${perspective}px)
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      rotateZ(${rotateZ}deg)
      `,
    });
  }, [perspective, rotateX, rotateY, rotateZ]);

  const handleReset = ():void => {
    setPerspective(150);
    setRotateX(0);
    setRotateY(0);
    setRotateZ(0);
  }

  const handleCopy = (): void => {
    const text = `transform: ${boxStyle.transform.replace(/\s{2,}/g, " ").trim()};`;
    navigator.clipboard.writeText(text);
    alert(`coppied to clipboard: transform: ${text}`);

  }

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

            <button type="button" onClick={handleReset}>Reset</button>
            <button type="button" onClick={handleCopy}>Copy</button>
          </div>
        </section>
        <section className="output">
          <div className="box-container">
            <div className="box" style={boxStyle}></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

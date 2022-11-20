import "./Styles/App.css";
import ReactSlider from "react-slider";
import { useState } from "react";

function App() {

  const [currentValue, setCurrentValue] = useState(0);
  
  return (
    <div className="App">
      <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      min={0}
      max={100}
      defaultValue={0}
      value={currentValue}
      onAfterChange={(value) => setCurrentValue(value)}
    />
    Value is {currentValue}
    </div>
  );
}

export default App;
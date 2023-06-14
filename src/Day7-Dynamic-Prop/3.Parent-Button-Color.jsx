import { useState } from "react";
import ChildColorComponent from "./4.Child-Text-Color";

const ParentColorComponent = () => {
  const [textColor, setTextColor] = useState("black");
  const colorChange = (clr) => {
    setTextColor(clr);
  };
  return (
    <div>
      
      <button onClick={colorChange("red")}>Red</button>
      <button onClick={colorChange("yellow")}>Yellow</button>
      <button onClick={colorChange("blue")}>Blue</button>
      <ChildColorComponent color={textColor} />
      {/* <button onClick={() => setTextColor('red')}>Red</button>
      <button onClick={() => setTextColor('yellow')}>Yellow</button>
      <button onClick={()=>setTextColor('blue')}>Blue</button> */}
    </div>
  );
};
export default ParentColorComponent;

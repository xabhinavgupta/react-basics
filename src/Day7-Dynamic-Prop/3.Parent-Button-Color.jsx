import { useState } from "react";
import ChildColorComponent from "./4.Child-Text-Color";

const ParentColorComponent = () => {
  const [textColor, setTextColor] = useState("black");
  const colorChange = (e) => {
    setTextColor(e.target.name);
  };
  return (
    <div>
      
      <button name="red" onClick={colorChange}>Red</button>
      <button name="green" onClick={colorChange}>Yellow</button>
      <button name="blue" onClick={colorChange}>Blue</button>
      <ChildColorComponent color={textColor} />
      {/* <button onClick={() => setTextColor('red')}>Red</button>
      <button onClick={() => setTextColor('yellow')}>Yellow</button>
      <button onClick={()=>setTextColor('blue')}>Blue</button> */}
    </div>
  );
};
export default ParentColorComponent;

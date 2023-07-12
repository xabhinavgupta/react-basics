import { useState } from "react";
import MeraBacha from "./2.ChildMemo";

const ParentMemo = () => {
  const [counter, setCounter] = useState(0);

  console.log("Parent Re-render");

  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
        <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
        <MeraBacha count={10} />
        <MeraBacha />
        <MeraBacha count={counter} />
        <MeraBacha />
        <MeraBacha />
        <MeraBacha />
        <MeraBacha />
        <MeraBacha />
      </div>
    </div>
  );
};

export default ParentMemo;
import { memo } from "react";

const Child = ({ count = 999 }) => {
  console.log("Child Re-Render");

  return <p>I am a child: {count}</p>;
};

const ChildComponent = memo(Child);

export default ChildComponent;
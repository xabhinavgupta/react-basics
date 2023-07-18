
import { memo } from "react";

const ChildV22_1 = ({ data, onClickText }) => {
  console.log("Re-rendering child V22_1: ", data);

  return (
    <p onClick={onClickText} style={{ backgroundColor: "tomato", padding: 16 }}>
      Data: {data}
    </p>
  );
};

const ChildV22_1Comp = memo(ChildV22_1);

export default ChildV22_1Comp;

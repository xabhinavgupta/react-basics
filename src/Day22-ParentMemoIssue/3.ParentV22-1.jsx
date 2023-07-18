import { useCallback, useState } from "react";
import ChildV22_1 from "./ChildV22-1";
const ParentV22_1 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const onCounter1Change = useCallback(() => {
    setCounter1((value) => value + 1);
  }, [setCounter1]);

  // const onCounter1Change = (() => {
  //   setCounter1((value) => value + 1);
  // }, [setCounter1]);

  // const onCounter1Change = useCallback(() => {
  //   setCounter1((value) => value + 1);
  // }, [setCounter1, setCounter2]);

  // const onCounter1Change = useCallback(() => {
  //   setCounter1((value) => value + 1);
  // }, []);


  return (
    <div>
      <div onClick={onCounter1Change}>Count 1 : {counter1}</div>
      <div onClick={() => setCounter2((val) => val + 1)}>Count 2 : {counter2}</div>

      <ChildV22_1 data={counter1} onClickText={onCounter1Change} />
    </div>
  );
};

export default ParentV22_1;


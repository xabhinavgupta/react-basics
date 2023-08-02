import { useRef } from "react";

const WithUseRef = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const onShowValue = () => {
    console.log("Name: ", nameInputRef.current.value);
    console.log("Email: ", emailInputRef.current.value);
  };

  console.log("Re-Render: ");
  return (
    <div>
      <input ref={nameInputRef} type="text" defaultValue={"Ajit"} placeholder="Name"/>
      <input ref={emailInputRef} type="email" defaultValue={"xyz@gmail.com"} placeholder="Email"/>
      <button onClick={onShowValue}>Show Value-WithUseRef</button>
    </div>
  );
};

export default WithUseRef;
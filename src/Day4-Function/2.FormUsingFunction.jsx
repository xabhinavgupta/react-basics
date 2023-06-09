//import { useState } from "react";

const FCCounter = () => {
  const [email, setEmail] = useState("xyz@xyz");

  const onUpdateEmail = (e) => {
   // const
    setEmail(email);
  };
  return (
    <div>
        <label>Email: </label>
        <input type="email" name="email" id="" placeholder="Enter email"/><br />
        <label>Password</label>
        <input type="password" name="password" id="" placeholder="Password" />
        <button onClick=""></button>
    </div>
  );
};

export default FCCounter;

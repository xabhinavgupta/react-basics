import { useState } from "react";

const WithoutUseRef = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onShowValue = () => {
    console.log("Name: ", name);
    console.log("Email: ", email);
  };

  console.log("Re-Render: ", name);
  console.log("Re-Render:", email);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <button onClick={onShowValue}>Show Value-WithoutUseREf</button>
    </div>
  );
};

export default WithoutUseRef;
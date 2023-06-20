import { useState } from "react";
const ListRenderAdd = () => {
  const [names, setNames] = useState(["Abhinav", "Ajit", "Sachin", "Vishal", "Tushar"]);
  const [newName, setNewName] = useState("");

  const onAddNewName = () => {
    // Prepend Example
    setNames((prevState) => [newName, ...prevState]);

    // Append Example
    //setNames((prevState) => [ ...prevState, newName]);

    setNewName("");
  };
  const changeColor = () => {
    const colors = ['black', 'blue', 'green', 'orange', 'purple', 'pink'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={onAddNewName}>Add</button>
      </div>
      <ul>
        {names.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <p style={{color:changeColor()}}>{item}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListRenderAdd;

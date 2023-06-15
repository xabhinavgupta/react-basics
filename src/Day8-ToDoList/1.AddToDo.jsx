import { useState } from "react";
const AddToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const addToDoList=()=>{
    
  }
  
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <button onClick={addToDoList}>Add To Do</button>
      </div>
    </div>
  );
};
export default AddToDo;

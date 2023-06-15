import  { useState } from 'react';

// AddTodo component
const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && description.trim() !== '') {
      onAddTodo({
        title,
        description,
        completed: false,
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add Todo</button>
    </form>
  );
};

// ListTodo component
const ListTodo = ({ todos, onToggleComplete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(index)}
          />
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
};

// ShowTodo component
const ShowTodo = ({ todos, setTodos }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        <ListTodo
          todos={todos}
          onToggleComplete={(index) => {
            const updatedTodos = [...todos];
            updatedTodos[index].completed = !updatedTodos[index].completed;
            setTodos(updatedTodos);
          }}
        />
      )}
    </div>
  );
};

// TodoList component
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      <ShowTodo todos={todos} />
    </div>
  );
};

export default TodoList;

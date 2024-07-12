export function CreateTodo({ newTodo, setNewTodo, addTodo }) {
  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input type="text" name="title" value={newTodo.title} onChange={handleChange} placeholder="Title" />
      <br /> <br />
      <input type="text" name="description" value={newTodo.description} onChange={handleChange} placeholder="Description" />
      <br /> <br />
      <button onClick={addTodo}>Add a todo</button>
    </div>
  );
}

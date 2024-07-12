export function Todos({ todos, markAsComplete }) {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo._id}>
          <div>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <button onClick={() => markAsComplete(todo._id)}>
              {todo.completed ? "Completed" : "Mark as complete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

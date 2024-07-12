export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todos) {
        return (
          <div>
            <div>
              <h2>{todos.title}</h2>
              <h3>{todos.description}</h3>
              <button>
                {todos.completed == true ? "Completed" : "Mark as complete"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  if (todos.length === 0) return <p>add some todos</p>;
  return (
    <div>
      {edit.id ? (
        <TodoForm submitTodo={editTodo} edit={edit} />
      ) : (
        todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              onComplete={() => onComplete(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;

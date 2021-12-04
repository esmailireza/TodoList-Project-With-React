import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import NavBar from "./NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectOption, setSelectOption] = useState("All");
  useEffect(() => {
    filterTodoA(selectOption.value);
  }, [todos, selectOption]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const CompleteTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    // clone: do not mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    /* console.log(selectedTodo); */
    // clone : todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    /* console.log(updatedTodos[index]); */
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    const index = todos.filter((todo) => todo.id !== id);
    setTodos(index);
    /*  console.log(index); */
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    // clone: do not mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    console.log(selectedTodo);
    // clone : todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    console.log(updatedTodos[index]);
    setTodos(updatedTodos);
  };

  const filterTodoA = (status) => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "unCompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setSelectOption(e);
    filterTodoA(e.value);
  };
  return (
    <div className="container">
      <NavBar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        filterTodoA={filterTodoA}
        onChange={selectHandler}
        selectOption={selectOption}
      />
      <TodoForm submitTodo={addTodo} todos={todos} />
      <TodoList
        todos={filteredTodos}
        onComplete={CompleteTodo}
        onDelete={deleteHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;

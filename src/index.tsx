import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
//import components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
//import interfaces
import { TodoInterface } from "./interfaces";
//import styles
import "./styles/styles.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// TodoListApp Component

const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  // Creating a new todo item
  function handleTodoCreate(todo: TodoInterface) {
    //Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos];

    //Update new todos state
    newTodosState.push(todo);

    //Update todos state
    setTodos(newTodosState);
  }
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

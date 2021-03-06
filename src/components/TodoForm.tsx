import React from "react";
import shortid from "shortid";

import { TodoFormInterface, TodoInterface } from "../interfaces";

const TodoForm = (props: TodoFormInterface) => {
  // create form state.
  // useState hook stores the text passed into the input element for the todo title before new todo item is created

  const [formState, setFormstate] = React.useState("");

  // create Ref for form input
  // useRef hook stores the reference to the input
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Handle todo input change - updates the form state when you write something into the input
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    //update form state with the text from input
    setFormstate(event.target.value);
  }

  // Handle 'Enter' in todo input
  function handleInputEnter(event: React.KeyboardEvent) {
    // Check for 'Enter' key
    if (event.key === "Enter") {
      // Prepare new todo object and shortid generates a unique id for every new todo
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false
      };

      // Create new todo item
      props.handleTodoCreate(newTodo);

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }
  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter new todo"
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  );
};

export default TodoForm;

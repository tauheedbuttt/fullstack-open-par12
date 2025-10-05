import React from "react";
import Todo from "./Todo";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos
        // eslint-disable-next-line react/prop-types
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onClickDelete={onClickDelete}
            onClickComplete={onClickComplete}
          />
        ))
        // eslint-disable-next-line react/jsx-key
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;

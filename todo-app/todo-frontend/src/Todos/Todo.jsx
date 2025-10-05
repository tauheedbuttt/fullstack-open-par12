// eslint-disable-next-line react/prop-types
const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </>
  );

  const notDoneInfo = (
    <>
      <span>This todo is not done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
        <button onClick={onClickComplete(todo)}> Set as done </button>
      </span>
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      <span>{todo.text}</span>
      {/* eslint-disable-next-line react/prop-types */}
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  );
};

export default Todo;

import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo) => {
    return <TodoListItem key={todo.id} task={todo.task} />;
  });

  // const arrOfJSX = [
  //   <p key="">Hello</p>,
  //   <h2>Welcome to our site</h2>,
  //   <a href="#">Login!</a>
  // ];

  return (
    <div>
      <h2>TodoList Component</h2>
      { mappedTodos }
      {/* { arrOfJSX } */}
    </div>
  );
};

export default TodoList;

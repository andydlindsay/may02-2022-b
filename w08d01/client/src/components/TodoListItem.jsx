import './TodoListItem.scss';

const TodoListItem = (props) => {
  return (
    <div className="todolistitem">
      <h2>Task: {props.task}</h2>
    </div>
  );
};

export default TodoListItem;

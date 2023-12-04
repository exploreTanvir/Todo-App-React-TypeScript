import { TodoProps } from "../Type";

const Todo = (props: TodoProps) => {
  
  const {id,name}=props.todo
  const DeleteTodo = (id: number) => {
    props.handleDeleteTodo(id);
  };
  return (
    <section className="todo">
      <h1>{id}</h1>
      <h2>{name}</h2>
      <button onClick={()=>{DeleteTodo(id)}}>Delete Todo</button>
    </section>
  );
};

export default Todo;

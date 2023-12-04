import { TodosProps } from "../Type";
import Todo from "./Todo";


const Data = (props: TodosProps) => {
  return (
    <section className="todos">
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleDeleteTodo={props.handleDeleteTodo}/>
      ))}
    </section>
  );
};

export default Data;

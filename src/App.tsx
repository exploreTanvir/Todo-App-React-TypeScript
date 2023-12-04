import { useState } from "react";
import AddTodo from "./Component/AddTodo";
import Data from "./Component/Todos";
import { TodosType } from "./Type";
const TodoData = [
  {
    id: 1,
    name: "Tanvir",
  },
  {
    id: 2,
    name: "Raju",
  },
  {
    id: 3,
    name: "Rohim",
  },
  {
    id: 4,
    name: "Korim",
  },
  {
    id: 5,
    name: "Mofiz",
  },
];

const App = () => {
  const [todos, setTodos] = useState(TodoData);

  const handleDeleteTodo = (id: number) => {
    const FilterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(FilterTodos);
  };

  const addNewTodo = (newTodo: TodosType) => {
    setTodos((prevState) => [...prevState, newTodo]);
    console.log(newTodo);
  };
  return (
    <div>
      <AddTodo addNewTodo={addNewTodo} />
      <Data todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;

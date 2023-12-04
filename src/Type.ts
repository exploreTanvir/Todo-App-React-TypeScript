export type TodosType = {
      id: number;
      name: string;
  };

  export type TodoProps = {
    todo: TodosType;
    handleDeleteTodo:Function
  };

  export type TodosProps = {
    todos: TodosType[];
    handleDeleteTodo: Function;
  };
  
  
export type addTodoProps = {
  addNewTodo: Function;
};